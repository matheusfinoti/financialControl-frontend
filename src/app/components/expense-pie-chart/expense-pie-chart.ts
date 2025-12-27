import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { ChartHostComponent } from '../chart-host/chart-host.component';

@Component({
  selector: 'app-expense-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './expense-pie-chart.html',
  styleUrl: './expense-pie-chart.css'
})
export class ExpensePieChartComponent implements OnInit {
  
  
  
  
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
