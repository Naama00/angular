// registration.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { ColDef, GridReadyEvent, CellClickedEvent, ValueFormatterParams } from 'ag-grid-community';
import { RegistrantService } from '../registrant.service';
import { MatButtonModule } from '@angular/material/button';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatButtonModule, CommonModule, AgGridAngular],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="container">
      <h2>ניהול נרשמות</h2>
      <p class="subtitle">רשימה מסודרת עם סינונים וצפייה בפרטים</p>
      <div class="debug-info">
        <p>סה"כ נרשמות: {{ rowData.length }}</p>
      </div>
      <div class="grid-wrapper">
        <ag-grid-angular
          *ngIf="isBrowser"
          class="ag-theme-quartz"
          [rowData]="displayRows"
          [columnDefs]="columnDefs"
          [defaultColDef]="defaultColDef"
          [pagination]="false"
          [animateRows]="true"
          [domLayout]="'normal'"
          [suppressMovableColumns]="false"
          [getRowHeight]="getRowHeight"
          [getRowStyle]="getRowStyle"
          (gridReady)="onGridReady($event)"
          (cellClicked)="onCellClicked($event)">
        </ag-grid-angular>
      </div>
    </div>
  `,
  styles: [`
    .container { 
      padding: 20px; 
      direction: rtl;
      font-family: 'Arial', sans-serif;
    }
    h2 { 
      color: #3f51b5; 
      margin-bottom: 5px;
      font-size: 24px;
    }
    .subtitle {
      color: #666;
      margin-bottom: 20px;
      font-size: 14px;
    }
    .debug-info {
      background-color: #f0f0f0;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 4px;
      color: #333;
    }
    .grid-wrapper {
      background: white;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
      position: relative;
      height: 600px;
      overflow-y: auto;
    }
    ag-grid-angular {
      width: 100%;
      height: 100%;
      display: block;
    }
    ::ng-deep .ag-theme-quartz {
      --ag-font-family: 'Arial', sans-serif;
      width: 100% !important;
    }
    ::ng-deep .ag-root {
      font-size: 13px;
    }
    ::ng-deep .ag-row {
      height: 35px;
      background-color: white;
      border-bottom: 1px solid #e0e0e0;
    }
    ::ng-deep .ag-row.detail-row {
      height: auto;
      background-color: #f9f9f9;
      padding: 15px;
      display: flex;
      align-items: stretch;
      overflow: visible !important;
    }
    ::ng-deep .ag-row:hover:not(.detail-row) {
      background-color: #f5f5f5;
    }
    ::ng-deep .ag-cell {
      display: flex;
      align-items: center;
      padding: 0 8px;
      overflow: visible !important;
    }
    ::ng-deep .ag-header-cell {
      background-color: #f5f5f5;
      font-weight: bold;
      border-right: 1px solid #ddd;
      height: 40px;
    }
    ::ng-deep .ag-body {
      background-color: white;
    }
    ::ng-deep .details-link {
      color: #3f51b5;
      text-decoration: underline;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      padding: 5px 10px;
    }
    ::ng-deep .details-link:hover {
      color: #303399;
    }
    ::ng-deep .detail-content {
      width: auto;
      background: white;
      padding: 15px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      display: block;
      overflow: visible;
      position: relative;
      z-index: 10;
      min-width: 500px;
    }
    ::ng-deep .detail-row-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 15px 25px;
      width: auto;
      min-width: 500px;
    }
    ::ng-deep .detail-field {
      display: contents;
    }
    ::ng-deep .detail-field strong {
      color: #333;
      margin-bottom: 0;
      font-weight: bold;
      font-size: 13px;
      text-align: right;
      white-space: nowrap;
    }
    ::ng-deep .detail-field span {
      color: #666;
      padding-right: 0;
      font-size: 13px;
      word-break: break-word;
      text-align: left;
    }
  `]
})
export class RegistrationComponent implements OnInit {
  rowData: any[] = [];
  displayRows: any[] = [];
  expandedRows: Set<string> = new Set();
  isBrowser: boolean;
  private gridApi: any;

  // הגדרת העמודות בטבלה
  columnDefs: ColDef[] = [
    { 
      field: 'id', 
      headerName: 'ת.ז', 
      filter: 'agTextColumnFilter',
      width: 110,
      sortable: true,
      resizable: true,
      cellRenderer: (params: any) => {
        if (params.data.isDetailRow) {
          return this.createDetailPanel(params.data);
        }
        return params.value;
      }
    },
    { 
      field: 'firstName', 
      headerName: 'שם פרטי', 
      filter: 'agTextColumnFilter',
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
      cellRenderer: (params: any) => params.data.isDetailRow ? '' : params.value
    },
    { 
      field: 'lastName', 
      headerName: 'שם משפחה', 
      filter: 'agTextColumnFilter',
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
      cellRenderer: (params: any) => params.data.isDetailRow ? '' : params.value
    },
    { 
      field: 'phone', 
      headerName: 'טלפון', 
      filter: 'agTextColumnFilter',
      width: 120,
      sortable: true,
      resizable: true,
      cellRenderer: (params: any) => params.data.isDetailRow ? '' : params.value
    },
    { 
      field: 'lessonName', 
      headerName: 'שיעור', 
      filter: 'agTextColumnFilter',
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
      cellRenderer: (params: any) => params.data.isDetailRow ? '' : params.value
    },
    { 
      field: 'price', 
      headerName: 'מחיר (₪)', 
      filter: 'agNumberColumnFilter',
      type: 'numericColumn',
      width: 90,
      sortable: true,
      resizable: true,
      cellRenderer: (params: any) => params.data.isDetailRow ? '' : params.value
    },
    { 
      field: 'isPaid', 
      headerName: 'סטטוס תשלום', 
      filter: 'agTextColumnFilter',
      valueFormatter: (p: ValueFormatterParams) => p.value ? '✓ שולם' : '✗ לא שולם',
      cellStyle: (p) => p.value ? { color: 'green', fontWeight: 'bold' } : { color: 'red', fontWeight: 'bold' },
      width: 110,
      sortable: true,
      resizable: true,
      cellRenderer: (params: any) => params.data.isDetailRow ? '' : (params.value ? '✓ שולם' : '✗ לא שולם')
    },
    {
      headerName: 'פרטים',
      cellRenderer: (params: any) => {
        if (params.data.isDetailRow) {
          return '';
        }
        const container = document.createElement('div');
        container.style.textAlign = 'center';
        container.style.padding = '5px';
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = this.expandedRows.has(params.data.id) ? '▼ הסתר' : '▶ צפה';
        link.className = 'details-link';
        link.setAttribute('data-row-id', params.data.id);
        container.appendChild(link);
        return container;
      },
      width: 100,
      sortable: false,
      filter: false,
      pinned: undefined
    }
  ];

  // הגדרות ברירת מחדל לעמודות
  defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    enableRowGroup: false
  };

  constructor(
    private regService: RegistrantService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Load data from the API
    this.loadRegistrants();
    
    // Add global event listener for details link clicks
    if (this.isBrowser) {
      setTimeout(() => {
        document.addEventListener('click', (e: any) => {
          const target = e.target as HTMLElement;
          if (target.classList.contains('details-link') || target.closest('a.details-link')) {
            e.preventDefault();
            e.stopPropagation();
            
            // Find the row ID from the link
            const link = target.closest('a.details-link') as HTMLElement;
            if (link) {
              const rowId = link.getAttribute('data-row-id');
              if (rowId) {
                const rowData = this.rowData.find(r => r.id === rowId);
                if (rowData) {
                  this.toggleDetails(rowData);
                }
              }
            }
          }
        }, true);
      }, 100);
    }
  }

  loadRegistrants(): void {
    this.regService.loadRegistrants().subscribe({
      next: (data) => {
        this.rowData = data && data.length > 0 ? [...data] : [];
        this.buildDisplayRows();
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load registrants:', err);
        // Fallback to get cached data if API call fails
        const cachedData = this.regService.getRegistrants();
        this.rowData = cachedData && cachedData.length > 0 ? [...cachedData] : [];
        this.buildDisplayRows();
        this.cdr.detectChanges();
      }
    });
  }

  buildDisplayRows(): void {
    this.displayRows = [];
    for (const row of this.rowData) {
      this.displayRows.push(row);
      if (this.expandedRows.has(row.id)) {
        this.displayRows.push({ ...row, isDetailRow: true, parentId: row.id });
      }
    }
    if (this.gridApi) {
      this.gridApi.setGridOption('rowData', this.displayRows);
      setTimeout(() => {
        this.gridApi?.sizeColumnsToFit();
      }, 50);
    }
  }

  toggleDetails(data: any): void {
    if (this.expandedRows.has(data.id)) {
      this.expandedRows.delete(data.id);
    } else {
      this.expandedRows.add(data.id);
    }
    this.buildDisplayRows();
    this.cdr.detectChanges();
  }

  getRowHeight = (params: any) => {
    if (params.data.isDetailRow) {
      return 180;
    }
    return 35;
  };

  getRowStyle = (params: any) => {
    // Highlight unpaid rows (שטרם שולמו)
    if (!params.data.isDetailRow && !params.data.isPaid) {
      return {
        backgroundColor: '#fff3cd',
        borderLeft: '4px solid #ff9800'
      };
    }
    return {};
  };

  onGridReady(params: GridReadyEvent): void {
    if (params && params.api) {
      this.gridApi = params.api;
      // Set row data through the API using displayRows
      if (this.displayRows && this.displayRows.length > 0) {
        this.gridApi.setGridOption('rowData', this.displayRows);
      }
      // Auto-fit columns after grid is ready
      setTimeout(() => {
        this.gridApi?.sizeColumnsToFit();
      }, 100);
    }
  }

  createDetailPanel(data: any): HTMLElement {
    const panel = document.createElement('div');
    panel.className = 'detail-content';
    
    const grid = document.createElement('div');
    grid.className = 'detail-row-grid';
    
    const fields = [
      { label: 'שם מלא', value: `${data.firstName} ${data.lastName}` },
      { label: 'תעודת זהות', value: data.id },
      { label: 'טלפון', value: data.phone },
      { label: 'שיעור', value: data.lessonName },
      { label: 'מחיר', value: `₪ ${data.price}` },
      { label: 'סטטוס תשלום', value: data.isPaid ? '✓ שולם' : '✗ לא שולם', paid: data.isPaid }
    ];
    
    for (const field of fields) {
      const fieldDiv = document.createElement('div');
      fieldDiv.className = 'detail-field';
      
      const label = document.createElement('strong');
      label.textContent = field.label + ':';
      
      const value = document.createElement('span');
      value.textContent = field.value;
      if (field.paid !== undefined) {
        value.style.color = field.paid ? 'green' : 'red';
      }
      
      fieldDiv.appendChild(label);
      fieldDiv.appendChild(value);
      grid.appendChild(fieldDiv);
    }
    
    panel.appendChild(grid);
    return panel;
  }

  onCellClicked(event: any): void {
    if (event.column.colId === 'פרטים' || event.colDef.headerName === 'פרטים') {
      // Find the parent row data (not the detail row)
      let rowData = event.data;
      if (rowData.isDetailRow) {
        rowData = this.rowData.find(r => r.id === rowData.parentId);
      }
      if (rowData && !rowData.isDetailRow) {
        this.toggleDetails(rowData);
      }
    }
  }
}