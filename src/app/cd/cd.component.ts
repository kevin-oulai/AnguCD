import { Component, Input } from '@angular/core';
import { CD } from '../models/cd.model';
import { CdsService } from '../services/cds.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cd',
  standalone: false,
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})

export class CDComponent {
  @Input() Cd!: CD;
  theCD!: CD;
  idcd!: string;

  constructor(private cdService: CdsService, private route: ActivatedRoute){};

  ngOnInit(): void{
    this.idcd = this.route.snapshot.params['id'];
    if(this.idcd !== undefined){
      this.theCD = this.cdService.getCDByID(+this.idcd);
    }
    else{
      this.theCD = this.Cd;
    }
  }

  onAddCD() : void{
    this.theCD.quantite++;
  }
}
