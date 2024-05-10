import { Component } from '@angular/core';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent {
  //TODO: 
  //assumption: we'd get some media title information by the time we get to this component 
  //for now, we will navigate from homepage to details (Routing)
  //we need API call ON INIT that retrieves media title details + streaming service info 
  //we'll need to format and style the details page 
}
