import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Respuesta } from 'src/app/interfaces/response';
import { RegistrarUsuarioService } from 'src/app/services/registrar-usuario.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  listaUsuarios: any = [];
  usuarios: number[]= [];
  estado: string = 'Registrado'

  constructor(private registrosUsuarios: RegistrarUsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuariosRegistro();
    
  }

  usuariosRegistro(){
    this.registrosUsuarios.getUsuario().subscribe(respons => {
      this.listaUsuarios = respons.body;
      if(respons.status == "422"){
        Swal.fire({
          icon: 'warning',
          title: 'ALERTA',
          text: respons.mensaje,
          confirmButtonColor: 'btn-color',
          confirmButtonText: 'OK',
        });
      }
      if(respons.status == "500"){
        Swal.fire({
          icon: 'warning',
          title: 'ALERTA',
          text: respons.mensaje,
          confirmButtonColor: 'btn-color',
          confirmButtonText: 'OK',
        });
      }

    });
    
  }

  select(procesado: boolean, id:number){
    this.usuarios.push(id);
  }

  actualizarUsauario(){
    for(let i=0; i<this.usuarios.length;i++){
      this.registrosUsuarios.putUsuario(this.listaUsuarios[this.usuarios[i]-1]).subscribe(res => {
       console.log(res);
        if(res.statusCodeValue == 200){
          
        }
        if(res.status == "400"){
          Swal.fire({
            icon: 'warning',
            title: 'ALERTA',
            text: res.mensaje,
            confirmButtonColor: 'btn-color',
            confirmButtonText: 'OK',
          });
        }
        if(res.status == "500"){
          Swal.fire({
            icon: 'warning',
            title: 'ALERTA',
            text: res.mensaje,
            confirmButtonColor: 'btn-color',
            confirmButtonText: 'OK',
          });
        }
      })
    }
  }

  



  

}
