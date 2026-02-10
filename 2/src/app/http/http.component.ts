import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent {
apiResponse: any = null;
constructor(private httpClient:HttpClient) {
  
}

httpGet() {
  this.httpClient.get('https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e')
  .subscribe(data => {
    console.log(data);
  });
}

getDataById(id: string) {
  const numericId = Number(id);
  if (isNaN(numericId) || id.trim() === '') {
    console.error('Invalid ID. Please enter a valid number.');
    return;
  }
  this.httpClient.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e&q=${numericId}`)
  .subscribe(data => {
    console.log(data);
  });
}
}