import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CD } from '../models/cd.model';


@Component({
  selector: 'app-new-cd',
  standalone: false,
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {
  formulaire!: FormGroup;
  currentCD!: CD;
  thumbRegex: RegExp | undefined;

  constructor(private formbuilder: FormBuilder){};

  ngOnInit(): void {
    
    this.thumbRegex = new RegExp('');
    
    this.formulaire = this.formbuilder.group({
      title: [null, [Validators.required, Validators.minLength(6)]],
      author: [null, [Validators.required, Validators.minLength(6)]],
      thumbnail: [null, [Validators.required, Validators.pattern(this.thumbRegex)]],
      dateDeSortie: [null, [Validators.required, Validators.minLength(0)]],
      quantite: [null, [Validators.required, Validators.minLength(0)]],
      price: [null, [Validators.required, Validators.minLength(0)]]
    },
    {updateOn: 'blur'}
  );

    this.formulaire.valueChanges.subscribe((formvalue) => {
      this.currentCD = {
        id: 0,
        title: formvalue.title,
        author: formvalue.author,
        thumbnail: formvalue.thumbnail,
        dateDeSortie: formvalue.dateDeSortie,
        quantite: formvalue.quantite,
        price: formvalue.price
      }
    })


  };

  addCD(): void{

  }
}
