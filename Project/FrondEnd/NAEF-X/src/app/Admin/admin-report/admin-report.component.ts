import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AdminServiceService } from '../admin-service.service';
Chart.register(...registerables);
// @ts-ignore
import ColorGenerator from "random-color-array-generator/ColorGenerator.min.js"

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit, AfterViewInit {

  constructor(private service:AdminServiceService) { }

  @ViewChild('chart') public chart!: ElementRef;
  @ViewChild('chart1') public chart1!: ElementRef;

  class: any = []
  number: any = []
  len1: any
  len2: any
  subject: any = []
  count: any = []
  mychart1: any
  mychart2: any

  ngAfterViewInit() {
    this.service.getDeptcount().subscribe((res) => {
      this.len1 = res.data.length
      for (let i = 0; i < this.len1; i++) {
        this.class.push(res.data[i].dept_name)
        this.number.push(res.data[i].num)
      }
      console.log(this.number)
      console.log(this.class)
      const colorGen = new ColorGenerator(this.class.length)
      this.mychart1 = new Chart(this.chart.nativeElement, {
        type: 'pie',
        data: {
          labels: JSON.parse(JSON.stringify(this.class)),
          // labels: this.class,
          datasets: [{
            label: '# Number of Students',
            // data: [1],
            data: JSON.parse(JSON.stringify(this.number)),
            backgroundColor: colorGen.generateRGB(),
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
    this.service.getPlaceCount().subscribe((res) => {
      this.len2 = res.data.length
      for (let i = 0; i < this.len2; i++) {
        this.subject.push(res.data[i].place_name)
        this.count.push(res.data[i].num)
      }
      console.log(this.subject, this.count)
      const colorGen = new ColorGenerator(this.subject.length)
      this.mychart2 = new Chart(this.chart1.nativeElement, {
        type: 'polarArea',
        data: {
          labels: JSON.parse(JSON.stringify(this.subject)),
          datasets: [{
            label: '# ',
            data: JSON.parse(JSON.stringify(this.count)),
            backgroundColor: colorGen.generateRGB(),
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
    console.log(this.class)
    console.log(this.number)


  }

  ngOnInit(): void {
  }

  export1() {
    var a = document.createElement('a');
    a.href = this.mychart1.toBase64Image();
    a.download = 'my_file_name.png';
    // Trigger the download
    a.click();
  }

  export2() {
    var a = document.createElement('a');
    a.href = this.mychart2.toBase64Image();
    a.download = 'my_file_name.png';
    // Trigger the download
    a.click();
  }

}
