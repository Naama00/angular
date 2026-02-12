import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  apiResponse: any = null;
  records: any[] = [];
  columns: string[] = [];
  loading = false;
  error = '';

  private readonly baseUrl =
    'https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e';

  constructor(private httpClient: HttpClient) {}

  httpGet() {
    this.loading = true;
    this.error = '';
    this.apiResponse = null;
    this.records = [];
    this.columns = [];

    this.httpClient.get(this.baseUrl).subscribe({
      next: (data) => {
        this.apiResponse = data;
        this.extractRecords(data);
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.message || String(err);
        this.loading = false;
      }
    });
  }

  getDataById(id: string) {
    const trimmed = id?.trim?.() ?? '';
    const numericId = Number(trimmed);
    if (trimmed === '' || isNaN(numericId)) {
      this.error = 'Invalid ID. Please enter a valid number.';
      return;
    }

    this.loading = true;
    this.error = '';
    this.apiResponse = null;
    this.records = [];
    this.columns = [];

    const url = `${this.baseUrl}&q=${encodeURIComponent(numericId)}`;
    this.httpClient.get(url).subscribe({
      next: (data) => {
        this.apiResponse = data;
        this.extractRecords(data);
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.message || String(err);
        this.loading = false;
      }
    });
  }

  private extractRecords(data: any) {
    const recs = data?.result?.records ?? [];
    this.records = Array.isArray(recs) ? recs : [];
    this.columns = this.records.length ? Object.keys(this.records[0]) : [];
  }
}