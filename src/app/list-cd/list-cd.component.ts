import { Component , OnInit } from '@angular/core';
import { CD } from '../models/cd.model';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-list-cd',
  standalone: false,
  templateUrl: './list-cd.component.html',
  styleUrls: ['./list-cd.component.scss']
})

export class ListCDComponent implements OnInit{
  listCD! : CD[];

  constructor(private myCDsService: CdsService) {};

  ngOnInit(): void{
    this.myCDsService.getCDs().subscribe(cds => {this.listCD = cds});
  }
}
