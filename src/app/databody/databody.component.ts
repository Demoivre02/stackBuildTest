import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-databody',
  templateUrl: './databody.component.html',
  styleUrls: ['./databody.component.css']
})

export class DatabodyComponent {
  @Input () item : any

}
