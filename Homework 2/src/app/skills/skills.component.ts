import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [HttpService]
})
export class SkillsComponent implements OnInit {
  skillsList?: string[];

  constructor(private http: HttpService) {}
  ngOnInit(): void {
    this.http.getSkillsList().subscribe(data => {
      this.skillsList = data
     console.log('Skills data:', this.skillsList);
    }
    );
  }

}
