import { HttpClient } from '@Angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfiguracionUtil } from './configuracion-util';

@Injectable( { providedIn : "root" } )
export class AutenticacionService {

    public constructor(private httpClient:HttpClient ){
    }

    public getUsuario(){

    }

    public getJWT(){

    }

    public login(login:string, password:string)/*:Observable<any>*/{

        //POST /login
        //CT:app/json
        //---------------------------
        //{ login:AAA, password:BBB }
        this.httpClient.post(ConfiguracionUtil.urlServidor+"/login", { login:login, password:password })
            .subscribe(
                (respuesta:any) => {
                    sessionStorage.setItem("JWT",respuesta.jwt)
                    sessionStorage.setItem("usuario",JSON.stringify(respuesta.usuario))                    
                },
                error => {
                    console.log(error)
                }
            )

    }

}



