import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Registrant } from './registrant.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrantService {
  private apiUrl = '/api/registrants';
  private cachedRegistrants: Registrant[] = [];
  
  // Mock data for fallback
  private mockRegistrants: Registrant[] = [
    { id: '123456789', firstName: 'רחל', lastName: 'לוי', phone: '050-1234567', lessonName: 'פילאטיס', price: 50, isPaid: true },
    { id: '123456789', firstName: 'אסנת', lastName: 'ברגר', phone: '050-1234567', lessonName: 'יוגה', price: 50, isPaid: true },
    { id: '123466789', firstName: 'תהילה', lastName: 'יעקבי', phone: '050-1234567', lessonName: 'פילאטיס', price: 50, isPaid: false },
    { id: '123456129', firstName: 'רבקה', lastName: 'שקד', phone: '050-1234567', lessonName: 'פילאטיס', price: 50, isPaid: true },
    { id: '987654321', firstName: 'לאה', lastName: 'כהן', phone: '052-7654321', lessonName: 'אירובי', price: 45, isPaid: false },
  { id: '555555555', firstName: 'דנה', lastName: 'בר', phone: '052-5555555', lessonName: 'זומבה', price: 40, isPaid: true },
  { id: '666666666', firstName: 'אורית', lastName: 'לוי', phone: '052-6666666', lessonName: 'היפהופ', price: 60, isPaid: false },
  { id: '777777777', firstName: 'מיכל', lastName: 'לב', phone: '052-7777777', lessonName: 'יוגה', price: 50, isPaid: true },
  { id: '888888888', firstName: 'אסתר', lastName: 'אורן', phone: '052-8888888', lessonName: 'פילאטיס', price: 50, isPaid: false },
  { id: '999999999', firstName: 'נועה', lastName: 'טל', phone: '052-9999999', lessonName: 'אירובי', price: 45, isPaid: false }

  ];

  constructor(private http: HttpClient) {
    this.cachedRegistrants = [...this.mockRegistrants];
  }

  getRegistrants(): Registrant[] {
    return this.cachedRegistrants;
  }

  loadRegistrants(): Observable<Registrant[]> {
    return this.http.get<Registrant[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.warn('API request failed, using mock data:', error);
        // Return mock data as fallback
        return of([...this.mockRegistrants]);
      })
    );
  }

  addRegistrant(newRegistrant: Registrant) {
    this.cachedRegistrants.push(newRegistrant);
  }
}