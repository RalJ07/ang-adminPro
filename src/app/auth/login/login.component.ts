import { AfterViewInit, Component, ElementRef, NgZone, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';

declare const google: any;

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('googleBtn') googleBtn!: ElementRef;


  constructor( private router: Router,
               private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private ngZone: NgZone) { }

  public formSubmitted = false;
  public auth2: any;

  public loginForm = this.fb.group({
   
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(6) ] ],
    remember: [false]
 
  });

  ngOnInit(): void {
    this.renderButton();
  }

  
  googleInit () {
    google.accounts.id.initialize({
      client_id: '44568626887-q4orr9f2fi2bmjed9p7ngac3btgss6ls.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse( response )
    });

    google.accounts.id.renderButton(
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );

  }

  handleCredentialResponse( response:any ) {
    console.log("Encoded JWT ID token: " + response.credential);
    this.usuarioService.loginGoogle( response.credential )
        .subscribe( resp => {
          this.router.navigateByUrl('/dashboard');
        })
  }

  login() {

    this.usuarioService.login( this.loginForm.value )
        .subscribe({
          next: (resp) => {
            
            if ( this.loginForm.get('remember')?.value ){
              localStorage.setItem('email', this.loginForm.get('email')?.value );
            }else {
              localStorage.removeItem('email');
            }

            this.router.navigateByUrl('/dashboard');

          },
          error: (err) => {
            Swal.fire('Error', err.error.msg, 'error');
          }
        })
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });

    this.startApp();

  }

  async startApp() {
    
    await this.usuarioService.googleInit();
    this.auth2 = this.usuarioService.auth2;

    this.attachSignin( document.getElementById('my-signin2') );
    
  };

  attachSignin(element:any) {
    
    this.auth2.attachClickHandler( element, {},
        (googleUser:any) => {
            const id_token = googleUser.getAuthResponse().id_token;
            // console.log(id_token);
            this.usuarioService.loginGoogle( id_token )
              .subscribe( resp => {
                // Navegar al Dashboard
                this.ngZone.run( () => {
                  this.router.navigateByUrl('/');
                })
              });

        }, (error:any) => {
            alert(JSON.stringify(error, undefined, 2));
        });
  }

}
