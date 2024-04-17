import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import {
  ApexChart,
  ApexNoData,
  ApexOptions,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarComponent {
  @ViewChild('chart', { static: true }) chart?: ChartComponent;
  //@ViewChild('chart') chart?: ChartComponent;

  data = signal<any>([
    {
      name: 'Incoming',
      data: [
        {
          x: 'January',
          y: 10,
        },
        {
          x: 'February',
          y: 20,
        },
        {
          x: 'March',
          y: 30,
        },
        {
          x: 'April',
          y: 40,
        },
      ],
    },
    {
      name: 'Outgoing',
      data: [
        {
          x: 'January',
          y: 8,
        },
        {
          x: 'February',
          y: 16,
        },
        {
          x: 'March',
          y: 24,
        },
        {
          x: 'April',
          y: 32,
        },
      ],
    },
  ]);

  noDataTemplate: ApexNoData = <ApexNoData>{
    text: 'Nessun dato da visualizzare',
    align: 'center',
    verticalAlign: 'middle',
    offsetX: 0,
    offsetY: 0,
    style: {
      color: 'white',
      fontSize: '16px',
      fontFamily: 'Roboto',
    },
  };

  chartOptions = computed<ApexOptions | undefined>(() => {
    const series = this.data();
    return {
      chart: {
        type: 'bar',
        height: 400,
        width: '100%',
      },
      series: series,
      noData: this.noDataTemplate,
    };
  });

  // chartOptions = signal<ApexOptions | undefined>({
  //   chart: {
  //     type: 'bar',
  //     height: 400,
  //     width: '100%',
  //   },
  //   series: this.tmp(),
  //   noData: this.noDataTemplate,
  // });

  series = computed(() => {
    return this.chartOptions()?.series ?? [];
  });

  labels = computed(() => {
    return this.chartOptions()?.labels ?? [];
  });

  chartSignal = computed(() => {
    return this.chartOptions()?.chart ?? ({} as ApexChart);
  });

  dataLabels = computed(() => {
    return this.chartOptions()?.dataLabels ?? {};
  });

  markers = computed(() => {
    return this.chartOptions()?.markers ?? {};
  });

  fill = computed(() => {
    return this.chartOptions()?.fill ?? {};
  });

  yaxis = computed(() => {
    return this.chartOptions()?.yaxis ?? {};
  });

  xaxis = computed(() => {
    return this.chartOptions()?.xaxis ?? {};
  });

  tooltip = computed(() => {
    return this.chartOptions()?.tooltip ?? {};
  });

  plotOptions = computed(() => {
    return this.chartOptions()?.plotOptions ?? {};
  });

  noData = computed(() => {
    return this.chartOptions()?.noData ?? {};
  });

  autoUpdateSeries = signal<boolean>(true);

  theme = computed(() => {
    return this.chartOptions()?.theme ?? {};
  });

  legend = computed(() => {
    return this.chartOptions()?.legend ?? {};
  });

  colors = computed(() => {
    return this.chartOptions()?.colors ?? [];
  });

  stroke = computed(() => {
    return this.chartOptions()?.stroke ?? {};
  });

  title = computed(() => {
    return this.chartOptions()?.title ?? {};
  });

  updateData() {
    console.log('updateData');
    this.data.set([
      {
        name: 'Incoming',
        data: [
          {
            x: 'January',
            y: Math.random(),
          },
          {
            x: 'February',
            y: Math.random(),
          },
          {
            x: 'March',
            y: Math.random(),
          },
          {
            x: 'April',
            y: Math.random(),
          },
        ],
      },
      {
        name: 'Outgoing',
        data: [
          {
            x: 'January',
            y: Math.random(),
          },
          {
            x: 'February',
            y: Math.random(),
          },
          {
            x: 'March',
            y: Math.random(),
          },
          {
            x: 'April',
            y: Math.random(),
          },
        ],
      },
    ]);

    // With autoUpdateSeries = true this is not necessary
    // this.chart?.updateSeries(this.tmp());
  }
}
