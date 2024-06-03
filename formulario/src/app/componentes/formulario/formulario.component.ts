import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit{

  formularioEjemplo: FormGroup;

  constructor(private form: FormBuilder)
  {
    this.formularioEjemplo = form.group({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.min(5)]),
    })

  }

  ngOnInit(): void {

  }

  enviarForm(){
    alert("Formulario enviado")
  }
}
