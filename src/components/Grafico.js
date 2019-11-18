import React from 'react'

import { ResponsiveLine } from '@nivo/line'
import { ResponsiveCalendar } from '@nivo/calendar'
import { ResponsiveBar } from '@nivo/bar'

export function Grafico() {
  return (
    <main className="main" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
      <div style={{ height: '48%', width: '70%' }}>
        <MyResponsiveLine data={data} />
      </div>
      <div style={{ height: '48%', width: '30%' }}>
        
      </div>
      <div style={{ height: '48%', width: '40%' }}>
        <MyResponsiveCalendar data={calendar} />
      </div>
      <div style={{ height: '48%', width: '60%' }}>
        <MyResponsiveBar data={bar} />
      </div>
    </main>

  )
}


var MyResponsiveLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Work Points',
      legendOffset: 36,
      legendPosition: 'middle'
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle'
    }}
    colors={{ scheme: 'nivo' }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)

var MyResponsiveCalendar = ({ data }) => (
    <ResponsiveCalendar
        data={data}
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)

var MyResponsiveBar = ({ data }) => (
  <ResponsiveBar
      data={data}
      keys={[ 'facil', 'medio', 'dificil' ]}
      indexBy="usuario"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'nivo' }}
      defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      fill={[
          {
              match: {
                  id: 'fries'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'dificil'
              },
              id: 'lines'
          }
      ]}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'usuario',
          legendPosition: 'middle',
          legendOffset: 32
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'atividades',
          legendPosition: 'middle',
          legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
      legends={[
          {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
  />
)

var bar = [
  {
    "usuario": "Simone",
    "facil": 75,
    "facilColor": "hsl(31, 70%, 50%)",
    "medio": 13,
    "medioColor": "hsl(73, 70%, 50%)",
    "dificil": 171,
    "dificilColor": "hsl(62, 70%, 50%)"
  },
  {
    "usuario": "Joey",
    "facil": 98,
    "facilColor": "hsl(96, 70%, 50%)",
    "medio": 89,
    "medioColor": "hsl(198, 70%, 50%)",
    "dificil": 102,
    "dificilColor": "hsl(210, 70%, 50%)"
  },
  {
    "usuario": "Joãozinho",
    "facil": 108,
    "facilColor": "hsl(267, 70%, 50%)",
    "medio": 1,
    "medioColor": "hsl(110, 70%, 50%)",
    "dificil": 41,
    "dificilColor": "hsl(163, 70%, 50%)"
  },
  {
    "usuario": "Leo",
    "facil": 62,
    "facilColor": "hsl(258, 70%, 50%)",
    "medio": 57,
    "medioColor": "hsl(163, 70%, 50%)",
    "dificil": 29,
    "dificilColor": "hsl(263, 70%, 50%)"
  },
  {
    "usuario": "Gabriel",
    "facil": 81,
    "facilColor": "hsl(196, 70%, 50%)",
    "medio": 108,
    "medioColor": "hsl(260, 70%, 50%)",
    "dificil": 98,
    "dificilColor": "hsl(160, 70%, 50%)"
  },
  {
    "usuario": "Mauricia",
    "facil": 21,
    "facilColor": "hsl(220, 70%, 50%)",
    "medio": 2,
    "medioColor": "hsl(7, 70%, 50%)",
    "dificil": 65,
    "dificilColor": "hsl(64, 70%, 50%)"
  },
  {
    "usuario": "Fernanda",
    "facil": 30,
    "facilColor": "hsl(198, 70%, 50%)",
    "medio": 15,
    "medioColor": "hsl(309, 70%, 50%)",
    "dificil": 185,
    "dificilColor": "hsl(322, 70%, 50%)"
  }
]

var data = [
  {
    "id": "Roberto",
    "color": "hsl(340, 70%, 50%)",
    "data": [
      {
        "x": "09/10",
        "y": 92
      },
      {
        "x": "10/10",
        "y": 131
      },
      {
        "x": "11/10",
        "y": 215
      },
      {
        "x": "12/10",
        "y": 201
      },
      {
        "x": "13/10",
        "y": 230
      },
      {
        "x": "14/10",
        "y": 191
      },
      {
        "x": "15/10",
        "y": 259
      },
      {
        "x": "16/10",
        "y": 257
      },
      {
        "x": "17/10",
        "y": 165
      },
      {
        "x": "18/10",
        "y": 260
      },
      {
        "x": "19/10",
        "y": 1
      },
      {
        "x": "20/10",
        "y": 81
      }
    ]
  },
  {
    "id": "Joey",
    "color": "hsl(148, 70%, 50%)",
    "data": [
      {
        "x": "09/10",
        "y": 113
      },
      {
        "x": "10/10",
        "y": 40
      },
      {
        "x": "11/10",
        "y": 57
      },
      {
        "x": "12/10",
        "y": 291
      },
      {
        "x": "13/10",
        "y": 10
      },
      {
        "x": "14/10",
        "y": 248
      },
      {
        "x": "15/10",
        "y": 12
      },
      {
        "x": "16/10",
        "y": 250
      },
      {
        "x": "17/10",
        "y": 194
      },
      {
        "x": "18/10",
        "y": 205
      },
      {
        "x": "19/10",
        "y": 164
      },
      {
        "x": "20/10",
        "y": 253
      }
    ]
  },
  {
    "id": "Mau",
    "color": "hsl(70, 70%, 50%)",
    "data": [
      {
        "x": "09/10",
        "y": 269
      },
      {
        "x": "10/10",
        "y": 19
      },
      {
        "x": "11/10",
        "y": 296
      },
      {
        "x": "12/10",
        "y": 92
      },
      {
        "x": "13/10",
        "y": 159
      },
      {
        "x": "14/10",
        "y": 249
      },
      {
        "x": "15/10",
        "y": 32
      },
      {
        "x": "16/10",
        "y": 163
      },
      {
        "x": "17/10",
        "y": 13
      },
      {
        "x": "18/10",
        "y": 146
      },
      {
        "x": "19/10",
        "y": 135
      },
      {
        "x": "20/10",
        "y": 273
      }
    ]
  },
  {
    "id": "Luscao",
    "color": "hsl(15, 70%, 50%)",
    "data": [
      {
        "x": "09/10",
        "y": 143
      },
      {
        "x": "10/10",
        "y": 180
      },
      {
        "x": "11/10",
        "y": 63
      },
      {
        "x": "12/10",
        "y": 14
      },
      {
        "x": "13/10",
        "y": 263
      },
      {
        "x": "14/10",
        "y": 12
      },
      {
        "x": "15/10",
        "y": 81
      },
      {
        "x": "16/10",
        "y": 32
      },
      {
        "x": "17/10",
        "y": 212
      },
      {
        "x": "18/10",
        "y": 14
      },
      {
        "x": "19/10",
        "y": 157
      },
      {
        "x": "20/10",
        "y": 100
      }
    ]
  },
  {
    "id": "Zoroark",
    "color": "hsl(342, 70%, 50%)",
    "data": [
      {
        "x": "09/10",
        "y": 2
      },
      {
        "x": "10/10",
        "y": 32
      },
      {
        "x": "11/10",
        "y": 219
      },
      {
        "x": "12/10",
        "y": 136
      },
      {
        "x": "13/10",
        "y": 96
      },
      {
        "x": "14/10",
        "y": 225
      },
      {
        "x": "15/10",
        "y": 281
      },
      {
        "x": "16/10",
        "y": 257
      },
      {
        "x": "17/10",
        "y": 177
      },
      {
        "x": "18/10",
        "y": 209
      },
      {
        "x": "19/10",
        "y": 61
      },
      {
        "x": "20/10",
        "y": 20
      }
    ]
  }
]

var calendar = [
  {
    "day": "2015-06-21",
    "value": 171
  },
  {
    "day": "2016-08-07",
    "value": 36
  },
  {
    "day": "2018-01-27",
    "value": 375
  },
  {
    "day": "2016-10-17",
    "value": 383
  },
  {
    "day": "2018-01-17",
    "value": 25
  },
  {
    "day": "2018-01-09",
    "value": 377
  },
  {
    "day": "2016-08-22",
    "value": 359
  },
  {
    "day": "2015-12-15",
    "value": 36
  },
  {
    "day": "2018-07-20",
    "value": 4
  },
  {
    "day": "2016-09-21",
    "value": 25
  },
  {
    "day": "2017-09-01",
    "value": 108
  },
  {
    "day": "2016-09-24",
    "value": 54
  },
  {
    "day": "2015-11-15",
    "value": 330
  },
  {
    "day": "2016-08-15",
    "value": 318
  },
  {
    "day": "2017-09-29",
    "value": 90
  },
  {
    "day": "2017-08-13",
    "value": 381
  },
  {
    "day": "2017-11-24",
    "value": 175
  },
  {
    "day": "2016-08-28",
    "value": 30
  },
  {
    "day": "2018-05-08",
    "value": 46
  },
  {
    "day": "2017-04-19",
    "value": 395
  },
  {
    "day": "2017-06-23",
    "value": 205
  },
  {
    "day": "2016-06-20",
    "value": 394
  },
  {
    "day": "2015-08-27",
    "value": 160
  },
  {
    "day": "2015-08-26",
    "value": 146
  },
  {
    "day": "2018-04-19",
    "value": 347
  },
  {
    "day": "2017-01-02",
    "value": 268
  },
  {
    "day": "2015-11-16",
    "value": 194
  },
  {
    "day": "2017-10-16",
    "value": 39
  },
  {
    "day": "2017-03-27",
    "value": 198
  },
  {
    "day": "2015-05-10",
    "value": 378
  },
  {
    "day": "2017-07-27",
    "value": 196
  },
  {
    "day": "2018-01-11",
    "value": 40
  },
  {
    "day": "2017-06-13",
    "value": 381
  },
  {
    "day": "2015-04-28",
    "value": 286
  },
  {
    "day": "2017-09-13",
    "value": 335
  },
  {
    "day": "2017-06-19",
    "value": 114
  },
  {
    "day": "2016-07-17",
    "value": 107
  },
  {
    "day": "2015-11-30",
    "value": 31
  },
  {
    "day": "2016-12-13",
    "value": 5
  },
  {
    "day": "2016-08-16",
    "value": 368
  },
  {
    "day": "2016-05-15",
    "value": 28
  },
  {
    "day": "2018-05-18",
    "value": 12
  },
  {
    "day": "2017-07-14",
    "value": 113
  },
  {
    "day": "2016-05-10",
    "value": 74
  },
  {
    "day": "2018-04-03",
    "value": 241
  },
  {
    "day": "2018-03-07",
    "value": 10
  },
  {
    "day": "2018-08-05",
    "value": 119
  },
  {
    "day": "2015-10-17",
    "value": 175
  },
  {
    "day": "2016-03-14",
    "value": 214
  },
  {
    "day": "2016-06-18",
    "value": 62
  },
  {
    "day": "2017-12-01",
    "value": 253
  },
  {
    "day": "2016-10-09",
    "value": 63
  },
  {
    "day": "2017-07-08",
    "value": 61
  },
  {
    "day": "2016-01-24",
    "value": 48
  },
  {
    "day": "2017-09-17",
    "value": 389
  },
  {
    "day": "2016-08-29",
    "value": 147
  },
  {
    "day": "2018-02-16",
    "value": 397
  },
  {
    "day": "2016-04-21",
    "value": 157
  },
  {
    "day": "2015-05-08",
    "value": 206
  },
  {
    "day": "2016-05-25",
    "value": 297
  },
  {
    "day": "2015-06-09",
    "value": 360
  },
  {
    "day": "2015-12-24",
    "value": 72
  },
  {
    "day": "2017-11-19",
    "value": 287
  },
  {
    "day": "2018-04-02",
    "value": 323
  },
  {
    "day": "2017-12-26",
    "value": 316
  },
  {
    "day": "2016-03-28",
    "value": 124
  },
  {
    "day": "2016-02-22",
    "value": 203
  },
  {
    "day": "2017-03-05",
    "value": 282
  },
  {
    "day": "2018-01-22",
    "value": 276
  },
  {
    "day": "2016-08-03",
    "value": 160
  },
  {
    "day": "2017-01-24",
    "value": 7
  },
  {
    "day": "2015-12-28",
    "value": 29
  },
  {
    "day": "2015-09-29",
    "value": 66
  },
  {
    "day": "2017-05-30",
    "value": 158
  },
  {
    "day": "2017-08-27",
    "value": 50
  },
  {
    "day": "2018-03-08",
    "value": 106
  },
  {
    "day": "2018-05-25",
    "value": 97
  },
  {
    "day": "2017-03-19",
    "value": 126
  },
  {
    "day": "2015-08-23",
    "value": 216
  },
  {
    "day": "2018-02-24",
    "value": 157
  },
  {
    "day": "2017-09-09",
    "value": 266
  },
  {
    "day": "2018-02-02",
    "value": 375
  },
  {
    "day": "2015-12-05",
    "value": 337
  },
  {
    "day": "2017-06-01",
    "value": 176
  },
  {
    "day": "2018-01-23",
    "value": 26
  },
  {
    "day": "2016-04-25",
    "value": 67
  },
  {
    "day": "2015-12-29",
    "value": 136
  },
  {
    "day": "2016-12-12",
    "value": 80
  },
  {
    "day": "2016-03-23",
    "value": 241
  },
  {
    "day": "2015-05-20",
    "value": 290
  },
  {
    "day": "2016-06-07",
    "value": 22
  },
  {
    "day": "2016-03-27",
    "value": 159
  },
  {
    "day": "2017-08-01",
    "value": 292
  },
  {
    "day": "2018-04-22",
    "value": 237
  },
  {
    "day": "2018-05-31",
    "value": 395
  },
  {
    "day": "2016-07-10",
    "value": 383
  },
  {
    "day": "2017-02-02",
    "value": 45
  },
  {
    "day": "2017-11-26",
    "value": 370
  },
  {
    "day": "2018-04-09",
    "value": 175
  },
  {
    "day": "2016-12-09",
    "value": 82
  },
  {
    "day": "2015-06-19",
    "value": 41
  },
  {
    "day": "2016-05-29",
    "value": 88
  },
  {
    "day": "2015-07-17",
    "value": 241
  },
  {
    "day": "2017-06-28",
    "value": 319
  },
  {
    "day": "2018-07-13",
    "value": 72
  },
  {
    "day": "2016-11-13",
    "value": 358
  },
  {
    "day": "2015-09-11",
    "value": 381
  },
  {
    "day": "2015-12-31",
    "value": 36
  },
  {
    "day": "2018-02-10",
    "value": 350
  },
  {
    "day": "2017-05-29",
    "value": 152
  },
  {
    "day": "2016-02-16",
    "value": 278
  },
  {
    "day": "2016-05-02",
    "value": 259
  },
  {
    "day": "2015-11-05",
    "value": 198
  },
  {
    "day": "2016-07-19",
    "value": 62
  },
  {
    "day": "2018-03-03",
    "value": 356
  },
  {
    "day": "2018-08-03",
    "value": 287
  },
  {
    "day": "2017-06-30",
    "value": 251
  },
  {
    "day": "2016-08-21",
    "value": 249
  },
  {
    "day": "2018-02-03",
    "value": 240
  },
  {
    "day": "2017-06-17",
    "value": 294
  },
  {
    "day": "2016-03-02",
    "value": 302
  },
  {
    "day": "2017-11-28",
    "value": 40
  },
  {
    "day": "2018-02-08",
    "value": 85
  },
  {
    "day": "2015-07-14",
    "value": 298
  },
  {
    "day": "2016-04-27",
    "value": 108
  },
  {
    "day": "2017-05-25",
    "value": 100
  },
  {
    "day": "2017-05-06",
    "value": 171
  },
  {
    "day": "2015-12-18",
    "value": 166
  },
  {
    "day": "2016-03-12",
    "value": 238
  },
  {
    "day": "2015-10-12",
    "value": 372
  },
  {
    "day": "2017-04-25",
    "value": 280
  },
  {
    "day": "2015-05-03",
    "value": 67
  },
  {
    "day": "2015-10-06",
    "value": 48
  },
  {
    "day": "2015-11-22",
    "value": 187
  },
  {
    "day": "2015-05-26",
    "value": 122
  },
  {
    "day": "2016-05-08",
    "value": 123
  },
  {
    "day": "2015-06-13",
    "value": 160
  },
  {
    "day": "2015-08-18",
    "value": 379
  },
  {
    "day": "2015-04-10",
    "value": 208
  },
  {
    "day": "2018-07-10",
    "value": 32
  },
  {
    "day": "2015-10-16",
    "value": 63
  },
  {
    "day": "2016-01-31",
    "value": 53
  },
  {
    "day": "2018-05-03",
    "value": 350
  },
  {
    "day": "2016-07-02",
    "value": 152
  },
  {
    "day": "2016-12-25",
    "value": 73
  },
  {
    "day": "2017-12-13",
    "value": 131
  },
  {
    "day": "2016-08-14",
    "value": 286
  },
  {
    "day": "2017-04-24",
    "value": 124
  },
  {
    "day": "2017-10-13",
    "value": 105
  },
  {
    "day": "2015-05-22",
    "value": 218
  },
  {
    "day": "2017-03-12",
    "value": 336
  },
  {
    "day": "2016-04-07",
    "value": 77
  },
  {
    "day": "2017-11-14",
    "value": 250
  },
  {
    "day": "2018-02-13",
    "value": 116
  },
  {
    "day": "2016-06-21",
    "value": 86
  },
  {
    "day": "2015-07-24",
    "value": 181
  },
  {
    "day": "2016-08-04",
    "value": 30
  },
  {
    "day": "2016-09-11",
    "value": 368
  },
  {
    "day": "2015-05-07",
    "value": 254
  },
  {
    "day": "2017-06-14",
    "value": 344
  },
  {
    "day": "2017-01-03",
    "value": 350
  },
  {
    "day": "2017-08-03",
    "value": 225
  },
  {
    "day": "2017-01-15",
    "value": 172
  },
  {
    "day": "2016-06-03",
    "value": 248
  },
  {
    "day": "2017-03-18",
    "value": 94
  },
  {
    "day": "2016-12-27",
    "value": 348
  },
  {
    "day": "2017-07-29",
    "value": 386
  },
  {
    "day": "2016-10-24",
    "value": 177
  },
  {
    "day": "2018-06-09",
    "value": 86
  },
  {
    "day": "2017-03-26",
    "value": 379
  },
  {
    "day": "2017-12-31",
    "value": 395
  },
  {
    "day": "2018-05-07",
    "value": 373
  },
  {
    "day": "2017-07-18",
    "value": 204
  },
  {
    "day": "2017-12-08",
    "value": 120
  },
  {
    "day": "2017-06-20",
    "value": 109
  },
  {
    "day": "2017-05-20",
    "value": 192
  },
  {
    "day": "2017-02-08",
    "value": 198
  },
  {
    "day": "2018-07-04",
    "value": 117
  },
  {
    "day": "2016-05-05",
    "value": 126
  },
  {
    "day": "2016-12-16",
    "value": 390
  },
  {
    "day": "2017-03-21",
    "value": 364
  },
  {
    "day": "2016-07-05",
    "value": 46
  },
  {
    "day": "2017-05-21",
    "value": 261
  },
  {
    "day": "2017-09-27",
    "value": 176
  },
  {
    "day": "2017-12-25",
    "value": 74
  },
  {
    "day": "2015-06-26",
    "value": 63
  },
  {
    "day": "2016-01-08",
    "value": 105
  },
  {
    "day": "2015-12-11",
    "value": 301
  },
  {
    "day": "2016-01-16",
    "value": 303
  },
  {
    "day": "2016-05-19",
    "value": 307
  },
  {
    "day": "2017-02-14",
    "value": 387
  },
  {
    "day": "2017-09-28",
    "value": 381
  },
  {
    "day": "2017-12-05",
    "value": 127
  },
  {
    "day": "2016-02-21",
    "value": 347
  },
  {
    "day": "2016-03-21",
    "value": 278
  },
  {
    "day": "2016-05-27",
    "value": 188
  },
  {
    "day": "2016-07-14",
    "value": 330
  },
  {
    "day": "2017-03-31",
    "value": 220
  },
  {
    "day": "2016-04-24",
    "value": 364
  },
  {
    "day": "2017-01-11",
    "value": 92
  },
  {
    "day": "2015-06-06",
    "value": 271
  },
  {
    "day": "2016-11-06",
    "value": 37
  },
  {
    "day": "2017-03-06",
    "value": 299
  },
  {
    "day": "2015-04-17",
    "value": 143
  },
  {
    "day": "2017-05-19",
    "value": 260
  },
  {
    "day": "2017-09-22",
    "value": 146
  },
  {
    "day": "2017-06-25",
    "value": 159
  },
  {
    "day": "2015-10-27",
    "value": 218
  },
  {
    "day": "2017-12-21",
    "value": 303
  },
  {
    "day": "2016-01-28",
    "value": 352
  },
  {
    "day": "2016-03-15",
    "value": 1
  },
  {
    "day": "2015-07-20",
    "value": 215
  },
  {
    "day": "2015-06-24",
    "value": 130
  },
  {
    "day": "2016-07-13",
    "value": 140
  },
  {
    "day": "2017-02-07",
    "value": 166
  },
  {
    "day": "2017-04-11",
    "value": 223
  },
  {
    "day": "2015-10-30",
    "value": 283
  },
  {
    "day": "2016-12-05",
    "value": 23
  },
  {
    "day": "2017-01-26",
    "value": 185
  },
  {
    "day": "2017-02-20",
    "value": 32
  },
  {
    "day": "2017-12-09",
    "value": 262
  },
  {
    "day": "2016-12-22",
    "value": 21
  },
  {
    "day": "2017-02-25",
    "value": 119
  },
  {
    "day": "2018-02-15",
    "value": 329
  },
  {
    "day": "2018-06-30",
    "value": 98
  },
  {
    "day": "2017-07-11",
    "value": 385
  },
  {
    "day": "2016-06-09",
    "value": 177
  },
  {
    "day": "2017-04-17",
    "value": 255
  },
  {
    "day": "2018-05-06",
    "value": 176
  },
  {
    "day": "2015-11-12",
    "value": 36
  },
  {
    "day": "2017-05-18",
    "value": 363
  },
  {
    "day": "2015-10-23",
    "value": 82
  },
  {
    "day": "2016-02-28",
    "value": 207
  },
  {
    "day": "2016-05-12",
    "value": 185
  },
  {
    "day": "2016-12-10",
    "value": 135
  },
  {
    "day": "2017-02-19",
    "value": 87
  },
  {
    "day": "2017-11-16",
    "value": 14
  },
  {
    "day": "2017-05-22",
    "value": 58
  },
  {
    "day": "2016-04-09",
    "value": 21
  },
  {
    "day": "2016-10-18",
    "value": 141
  },
  {
    "day": "2016-11-10",
    "value": 385
  },
  {
    "day": "2017-10-19",
    "value": 98
  },
  {
    "day": "2016-10-12",
    "value": 126
  },
  {
    "day": "2016-02-10",
    "value": 77
  },
  {
    "day": "2017-06-15",
    "value": 278
  },
  {
    "day": "2016-03-04",
    "value": 163
  },
  {
    "day": "2015-08-04",
    "value": 386
  },
  {
    "day": "2016-12-04",
    "value": 4
  },
  {
    "day": "2016-04-11",
    "value": 48
  },
  {
    "day": "2015-06-22",
    "value": 21
  },
  {
    "day": "2016-10-28",
    "value": 120
  },
  {
    "day": "2015-07-06",
    "value": 205
  },
  {
    "day": "2017-01-18",
    "value": 7
  },
  {
    "day": "2018-05-17",
    "value": 24
  },
  {
    "day": "2015-05-19",
    "value": 111
  },
  {
    "day": "2016-06-23",
    "value": 225
  },
  {
    "day": "2018-04-25",
    "value": 341
  },
  {
    "day": "2016-08-12",
    "value": 207
  },
  {
    "day": "2017-05-17",
    "value": 350
  },
  {
    "day": "2017-04-02",
    "value": 19
  },
  {
    "day": "2015-10-14",
    "value": 333
  },
  {
    "day": "2015-07-08",
    "value": 250
  },
  {
    "day": "2017-11-01",
    "value": 370
  },
  {
    "day": "2016-06-01",
    "value": 222
  },
  {
    "day": "2018-01-15",
    "value": 209
  },
  {
    "day": "2016-07-01",
    "value": 294
  },
  {
    "day": "2016-12-06",
    "value": 104
  },
  {
    "day": "2016-05-11",
    "value": 262
  },
  {
    "day": "2017-07-22",
    "value": 119
  },
  {
    "day": "2016-01-27",
    "value": 312
  },
  {
    "day": "2016-09-09",
    "value": 307
  },
  {
    "day": "2018-04-17",
    "value": 209
  },
  {
    "day": "2017-04-20",
    "value": 14
  },
  {
    "day": "2016-10-16",
    "value": 198
  },
  {
    "day": "2017-11-03",
    "value": 27
  },
  {
    "day": "2015-11-17",
    "value": 25
  },
  {
    "day": "2016-04-02",
    "value": 157
  },
  {
    "day": "2016-09-14",
    "value": 245
  },
  {
    "day": "2016-08-01",
    "value": 170
  },
  {
    "day": "2017-02-09",
    "value": 350
  },
  {
    "day": "2017-06-29",
    "value": 124
  },
  {
    "day": "2015-06-30",
    "value": 387
  },
  {
    "day": "2017-07-30",
    "value": 99
  },
  {
    "day": "2017-12-24",
    "value": 280
  },
  {
    "day": "2015-08-20",
    "value": 306
  },
  {
    "day": "2016-06-14",
    "value": 246
  },
  {
    "day": "2017-08-24",
    "value": 45
  },
  {
    "day": "2018-07-11",
    "value": 199
  },
  {
    "day": "2016-09-30",
    "value": 301
  },
  {
    "day": "2018-06-28",
    "value": 49
  },
  {
    "day": "2016-05-09",
    "value": 85
  },
  {
    "day": "2017-08-25",
    "value": 202
  },
  {
    "day": "2016-12-19",
    "value": 176
  },
  {
    "day": "2016-07-15",
    "value": 257
  },
  {
    "day": "2015-07-15",
    "value": 307
  },
  {
    "day": "2018-03-27",
    "value": 233
  },
  {
    "day": "2018-05-21",
    "value": 223
  },
  {
    "day": "2016-03-30",
    "value": 145
  },
  {
    "day": "2015-06-12",
    "value": 342
  },
  {
    "day": "2015-07-10",
    "value": 393
  },
  {
    "day": "2016-03-29",
    "value": 248
  },
  {
    "day": "2016-02-29",
    "value": 238
  },
  {
    "day": "2017-02-23",
    "value": 130
  },
  {
    "day": "2018-02-01",
    "value": 107
  },
  {
    "day": "2016-01-02",
    "value": 273
  },
  {
    "day": "2016-08-23",
    "value": 372
  },
  {
    "day": "2017-04-09",
    "value": 335
  },
  {
    "day": "2017-04-04",
    "value": 370
  },
  {
    "day": "2016-11-05",
    "value": 81
  },
  {
    "day": "2016-09-27",
    "value": 141
  },
  {
    "day": "2015-11-06",
    "value": 75
  },
  {
    "day": "2015-05-02",
    "value": 295
  },
  {
    "day": "2016-03-05",
    "value": 115
  },
  {
    "day": "2016-09-25",
    "value": 79
  },
  {
    "day": "2016-07-24",
    "value": 104
  },
  {
    "day": "2018-06-26",
    "value": 139
  },
  {
    "day": "2015-06-14",
    "value": 165
  },
  {
    "day": "2015-08-21",
    "value": 358
  },
  {
    "day": "2016-12-18",
    "value": 305
  },
  {
    "day": "2017-06-03",
    "value": 6
  },
  {
    "day": "2017-10-26",
    "value": 109
  },
  {
    "day": "2018-05-22",
    "value": 78
  },
  {
    "day": "2016-01-12",
    "value": 101
  },
  {
    "day": "2017-05-02",
    "value": 244
  },
  {
    "day": "2016-12-29",
    "value": 220
  },
  {
    "day": "2017-02-01",
    "value": 239
  },
  {
    "day": "2015-10-02",
    "value": 111
  },
  {
    "day": "2015-04-26",
    "value": 193
  },
  {
    "day": "2016-05-14",
    "value": 295
  },
  {
    "day": "2018-02-18",
    "value": 368
  },
  {
    "day": "2015-12-20",
    "value": 278
  },
  {
    "day": "2017-12-06",
    "value": 95
  },
  {
    "day": "2017-08-19",
    "value": 44
  },
  {
    "day": "2017-08-11",
    "value": 362
  },
  {
    "day": "2017-04-29",
    "value": 237
  },
  {
    "day": "2015-07-07",
    "value": 184
  },
  {
    "day": "2017-11-07",
    "value": 54
  },
  {
    "day": "2017-01-20",
    "value": 377
  },
  {
    "day": "2016-06-30",
    "value": 40
  },
  {
    "day": "2017-03-24",
    "value": 139
  },
  {
    "day": "2018-05-27",
    "value": 354
  },
  {
    "day": "2018-06-12",
    "value": 38
  },
  {
    "day": "2017-08-30",
    "value": 177
  },
  {
    "day": "2015-12-01",
    "value": 359
  },
  {
    "day": "2016-01-03",
    "value": 102
  },
  {
    "day": "2017-10-03",
    "value": 206
  },
  {
    "day": "2017-10-06",
    "value": 137
  },
  {
    "day": "2016-06-05",
    "value": 384
  },
  {
    "day": "2015-12-17",
    "value": 44
  },
  {
    "day": "2017-01-27",
    "value": 158
  },
  {
    "day": "2017-07-31",
    "value": 215
  },
  {
    "day": "2015-08-16",
    "value": 41
  },
  {
    "day": "2016-07-25",
    "value": 279
  },
  {
    "day": "2018-05-23",
    "value": 272
  },
  {
    "day": "2016-06-16",
    "value": 314
  },
  {
    "day": "2015-06-10",
    "value": 118
  },
  {
    "day": "2016-10-30",
    "value": 132
  },
  {
    "day": "2017-10-09",
    "value": 333
  },
  {
    "day": "2017-10-12",
    "value": 266
  },
  {
    "day": "2017-10-15",
    "value": 153
  },
  {
    "day": "2017-01-29",
    "value": 105
  },
  {
    "day": "2016-10-21",
    "value": 47
  },
  {
    "day": "2015-11-10",
    "value": 264
  },
  {
    "day": "2015-04-11",
    "value": 152
  },
  {
    "day": "2017-07-10",
    "value": 356
  },
  {
    "day": "2015-09-12",
    "value": 315
  },
  {
    "day": "2015-04-22",
    "value": 346
  },
  {
    "day": "2016-01-30",
    "value": 220
  },
  {
    "day": "2016-12-11",
    "value": 276
  },
  {
    "day": "2016-06-25",
    "value": 94
  },
  {
    "day": "2015-12-21",
    "value": 124
  },
  {
    "day": "2015-07-12",
    "value": 115
  },
  {
    "day": "2017-05-26",
    "value": 1
  },
  {
    "day": "2016-11-17",
    "value": 309
  },
  {
    "day": "2018-02-06",
    "value": 286
  },
  {
    "day": "2017-04-22",
    "value": 202
  },
  {
    "day": "2015-06-23",
    "value": 139
  },
  {
    "day": "2016-03-22",
    "value": 251
  },
  {
    "day": "2017-08-14",
    "value": 149
  },
  {
    "day": "2016-03-31",
    "value": 384
  },
  {
    "day": "2018-04-07",
    "value": 240
  },
  {
    "day": "2016-09-29",
    "value": 366
  },
  {
    "day": "2018-06-25",
    "value": 317
  },
  {
    "day": "2015-04-24",
    "value": 110
  },
  {
    "day": "2018-06-19",
    "value": 398
  },
  {
    "day": "2017-08-02",
    "value": 318
  },
  {
    "day": "2018-07-26",
    "value": 396
  },
  {
    "day": "2016-04-28",
    "value": 204
  },
  {
    "day": "2018-03-18",
    "value": 182
  },
  {
    "day": "2016-05-01",
    "value": 197
  },
  {
    "day": "2017-03-14",
    "value": 220
  },
  {
    "day": "2017-08-10",
    "value": 7
  },
  {
    "day": "2018-01-18",
    "value": 254
  },
  {
    "day": "2018-06-20",
    "value": 373
  },
  {
    "day": "2015-07-30",
    "value": 368
  },
  {
    "day": "2015-04-09",
    "value": 230
  },
  {
    "day": "2015-10-24",
    "value": 291
  },
  {
    "day": "2015-04-01",
    "value": 143
  },
  {
    "day": "2017-09-06",
    "value": 337
  },
  {
    "day": "2015-12-19",
    "value": 157
  },
  {
    "day": "2016-10-02",
    "value": 158
  },
  {
    "day": "2016-09-05",
    "value": 123
  },
  {
    "day": "2015-06-01",
    "value": 119
  },
  {
    "day": "2015-06-17",
    "value": 150
  },
  {
    "day": "2016-09-28",
    "value": 90
  },
  {
    "day": "2015-11-29",
    "value": 317
  },
  {
    "day": "2017-03-10",
    "value": 79
  },
  {
    "day": "2018-06-17",
    "value": 254
  },
  {
    "day": "2016-05-18",
    "value": 266
  },
  {
    "day": "2018-05-16",
    "value": 374
  },
  {
    "day": "2017-08-20",
    "value": 329
  },
  {
    "day": "2018-01-25",
    "value": 227
  },
  {
    "day": "2017-02-17",
    "value": 143
  },
  {
    "day": "2018-08-10",
    "value": 226
  },
  {
    "day": "2016-09-13",
    "value": 14
  },
  {
    "day": "2016-11-16",
    "value": 313
  },
  {
    "day": "2017-10-08",
    "value": 12
  },
  {
    "day": "2017-11-20",
    "value": 276
  },
  {
    "day": "2016-03-06",
    "value": 334
  },
  {
    "day": "2015-11-02",
    "value": 126
  },
  {
    "day": "2017-09-10",
    "value": 96
  },
  {
    "day": "2016-09-01",
    "value": 38
  },
  {
    "day": "2015-07-11",
    "value": 65
  },
  {
    "day": "2016-05-23",
    "value": 351
  },
  {
    "day": "2016-06-10",
    "value": 221
  },
  {
    "day": "2018-01-31",
    "value": 151
  },
  {
    "day": "2015-12-04",
    "value": 348
  },
  {
    "day": "2016-07-26",
    "value": 258
  },
  {
    "day": "2015-09-06",
    "value": 396
  },
  {
    "day": "2017-04-26",
    "value": 390
  },
  {
    "day": "2016-05-03",
    "value": 234
  },
  {
    "day": "2016-10-20",
    "value": 116
  },
  {
    "day": "2015-08-09",
    "value": 111
  },
  {
    "day": "2017-08-16",
    "value": 272
  },
  {
    "day": "2016-11-03",
    "value": 391
  },
  {
    "day": "2016-11-23",
    "value": 205
  },
  {
    "day": "2018-05-26",
    "value": 76
  },
  {
    "day": "2015-05-13",
    "value": 339
  },
  {
    "day": "2016-03-03",
    "value": 187
  },
  {
    "day": "2017-09-03",
    "value": 366
  },
  {
    "day": "2015-05-05",
    "value": 364
  },
  {
    "day": "2016-10-01",
    "value": 237
  },
  {
    "day": "2015-04-06",
    "value": 172
  },
  {
    "day": "2018-08-09",
    "value": 234
  },
  {
    "day": "2017-11-30",
    "value": 296
  },
  {
    "day": "2016-07-12",
    "value": 138
  },
  {
    "day": "2018-01-19",
    "value": 211
  },
  {
    "day": "2017-03-08",
    "value": 142
  },
  {
    "day": "2015-11-25",
    "value": 276
  },
  {
    "day": "2015-11-23",
    "value": 286
  },
  {
    "day": "2018-07-07",
    "value": 292
  },
  {
    "day": "2015-12-25",
    "value": 343
  },
  {
    "day": "2018-02-19",
    "value": 132
  },
  {
    "day": "2016-03-24",
    "value": 143
  },
  {
    "day": "2017-04-05",
    "value": 208
  },
  {
    "day": "2017-09-04",
    "value": 260
  },
  {
    "day": "2017-11-25",
    "value": 252
  },
  {
    "day": "2016-02-02",
    "value": 27
  },
  {
    "day": "2016-09-18",
    "value": 119
  },
  {
    "day": "2017-03-01",
    "value": 371
  },
  {
    "day": "2017-08-17",
    "value": 329
  },
  {
    "day": "2015-08-12",
    "value": 200
  },
  {
    "day": "2015-08-11",
    "value": 44
  },
  {
    "day": "2017-03-13",
    "value": 305
  },
  {
    "day": "2015-07-22",
    "value": 251
  },
  {
    "day": "2017-07-21",
    "value": 247
  },
  {
    "day": "2016-06-28",
    "value": 133
  },
  {
    "day": "2016-09-08",
    "value": 71
  },
  {
    "day": "2016-04-29",
    "value": 265
  },
  {
    "day": "2017-09-25",
    "value": 254
  },
  {
    "day": "2018-06-10",
    "value": 99
  },
  {
    "day": "2015-09-28",
    "value": 181
  },
  {
    "day": "2016-08-20",
    "value": 109
  },
  {
    "day": "2018-07-25",
    "value": 186
  },
  {
    "day": "2015-06-05",
    "value": 321
  },
  {
    "day": "2017-01-13",
    "value": 349
  },
  {
    "day": "2016-03-07",
    "value": 19
  },
  {
    "day": "2015-10-11",
    "value": 316
  },
  {
    "day": "2015-10-10",
    "value": 60
  },
  {
    "day": "2018-06-27",
    "value": 343
  },
  {
    "day": "2017-09-21",
    "value": 48
  },
  {
    "day": "2015-11-14",
    "value": 324
  },
  {
    "day": "2017-01-28",
    "value": 332
  },
  {
    "day": "2016-03-16",
    "value": 50
  },
  {
    "day": "2016-11-30",
    "value": 29
  },
  {
    "day": "2018-01-02",
    "value": 131
  },
  {
    "day": "2015-10-03",
    "value": 106
  },
  {
    "day": "2017-05-13",
    "value": 288
  },
  {
    "day": "2016-03-08",
    "value": 11
  },
  {
    "day": "2018-06-06",
    "value": 78
  },
  {
    "day": "2017-06-24",
    "value": 139
  },
  {
    "day": "2016-01-04",
    "value": 145
  },
  {
    "day": "2015-08-02",
    "value": 339
  },
  {
    "day": "2018-05-04",
    "value": 86
  },
  {
    "day": "2018-04-21",
    "value": 134
  },
  {
    "day": "2018-04-30",
    "value": 230
  },
  {
    "day": "2018-03-10",
    "value": 174
  },
  {
    "day": "2017-09-02",
    "value": 198
  },
  {
    "day": "2016-11-01",
    "value": 73
  },
  {
    "day": "2017-05-31",
    "value": 385
  },
  {
    "day": "2016-09-10",
    "value": 321
  },
  {
    "day": "2018-07-14",
    "value": 369
  },
  {
    "day": "2017-05-05",
    "value": 3
  },
  {
    "day": "2018-03-29",
    "value": 381
  },
  {
    "day": "2018-05-28",
    "value": 233
  },
  {
    "day": "2018-07-28",
    "value": 331
  },
  {
    "day": "2018-02-17",
    "value": 367
  },
  {
    "day": "2015-07-31",
    "value": 244
  },
  {
    "day": "2018-04-16",
    "value": 215
  },
  {
    "day": "2016-01-20",
    "value": 10
  },
  {
    "day": "2017-12-14",
    "value": 390
  },
  {
    "day": "2017-07-25",
    "value": 202
  },
  {
    "day": "2018-03-30",
    "value": 130
  },
  {
    "day": "2018-07-24",
    "value": 184
  },
  {
    "day": "2017-10-01",
    "value": 200
  },
  {
    "day": "2016-10-27",
    "value": 330
  },
  {
    "day": "2015-05-04",
    "value": 204
  },
  {
    "day": "2015-12-14",
    "value": 377
  },
  {
    "day": "2017-01-07",
    "value": 324
  },
  {
    "day": "2017-12-07",
    "value": 104
  },
  {
    "day": "2017-01-06",
    "value": 278
  },
  {
    "day": "2016-04-30",
    "value": 250
  },
  {
    "day": "2017-09-12",
    "value": 370
  },
  {
    "day": "2016-09-03",
    "value": 372
  },
  {
    "day": "2015-12-13",
    "value": 225
  },
  {
    "day": "2016-09-20",
    "value": 341
  },
  {
    "day": "2015-05-06",
    "value": 252
  },
  {
    "day": "2017-02-26",
    "value": 243
  },
  {
    "day": "2015-04-02",
    "value": 227
  },
  {
    "day": "2017-07-19",
    "value": 225
  },
  {
    "day": "2015-05-29",
    "value": 139
  },
  {
    "day": "2016-01-07",
    "value": 292
  },
  {
    "day": "2018-05-20",
    "value": 118
  },
  {
    "day": "2016-11-20",
    "value": 101
  },
  {
    "day": "2017-07-26",
    "value": 332
  },
  {
    "day": "2016-02-15",
    "value": 341
  },
  {
    "day": "2016-12-14",
    "value": 45
  },
  {
    "day": "2017-08-04",
    "value": 122
  },
  {
    "day": "2018-01-28",
    "value": 14
  },
  {
    "day": "2017-07-07",
    "value": 142
  },
  {
    "day": "2017-02-16",
    "value": 248
  },
  {
    "day": "2016-10-15",
    "value": 176
  },
  {
    "day": "2017-10-21",
    "value": 53
  },
  {
    "day": "2017-10-20",
    "value": 384
  },
  {
    "day": "2015-09-26",
    "value": 217
  },
  {
    "day": "2016-05-04",
    "value": 82
  },
  {
    "day": "2017-07-13",
    "value": 314
  },
  {
    "day": "2017-05-01",
    "value": 370
  },
  {
    "day": "2016-07-11",
    "value": 206
  },
  {
    "day": "2016-01-01",
    "value": 29
  },
  {
    "day": "2017-01-17",
    "value": 384
  },
  {
    "day": "2018-06-22",
    "value": 205
  },
  {
    "day": "2018-04-06",
    "value": 217
  },
  {
    "day": "2015-06-11",
    "value": 15
  },
  {
    "day": "2017-04-12",
    "value": 179
  },
  {
    "day": "2015-11-08",
    "value": 301
  },
  {
    "day": "2015-06-15",
    "value": 28
  },
  {
    "day": "2018-08-07",
    "value": 244
  },
  {
    "day": "2017-05-28",
    "value": 198
  },
  {
    "day": "2017-12-30",
    "value": 220
  },
  {
    "day": "2016-01-23",
    "value": 376
  },
  {
    "day": "2017-10-11",
    "value": 130
  },
  {
    "day": "2015-10-05",
    "value": 169
  },
  {
    "day": "2018-01-21",
    "value": 13
  },
  {
    "day": "2016-11-24",
    "value": 138
  },
  {
    "day": "2016-08-31",
    "value": 28
  },
  {
    "day": "2016-01-26",
    "value": 340
  },
  {
    "day": "2016-11-25",
    "value": 108
  },
  {
    "day": "2017-10-30",
    "value": 167
  },
  {
    "day": "2017-04-21",
    "value": 167
  },
  {
    "day": "2015-11-26",
    "value": 333
  },
  {
    "day": "2017-06-26",
    "value": 400
  },
  {
    "day": "2017-12-03",
    "value": 234
  },
  {
    "day": "2018-04-08",
    "value": 98
  },
  {
    "day": "2016-09-02",
    "value": 96
  },
  {
    "day": "2018-04-04",
    "value": 44
  },
  {
    "day": "2016-11-02",
    "value": 192
  },
  {
    "day": "2015-10-20",
    "value": 182
  },
  {
    "day": "2018-06-05",
    "value": 187
  },
  {
    "day": "2016-06-11",
    "value": 27
  },
  {
    "day": "2018-08-04",
    "value": 80
  },
  {
    "day": "2018-01-16",
    "value": 342
  },
  {
    "day": "2015-10-04",
    "value": 94
  },
  {
    "day": "2015-04-23",
    "value": 135
  },
  {
    "day": "2015-05-15",
    "value": 262
  },
  {
    "day": "2015-12-10",
    "value": 160
  },
  {
    "day": "2016-12-26",
    "value": 148
  },
  {
    "day": "2016-07-22",
    "value": 323
  },
  {
    "day": "2016-11-11",
    "value": 355
  },
  {
    "day": "2016-07-20",
    "value": 132
  },
  {
    "day": "2017-09-19",
    "value": 390
  },
  {
    "day": "2015-05-09",
    "value": 150
  },
  {
    "day": "2017-12-16",
    "value": 273
  },
  {
    "day": "2016-02-14",
    "value": 280
  },
  {
    "day": "2018-03-04",
    "value": 357
  },
  {
    "day": "2018-03-31",
    "value": 167
  },
  {
    "day": "2015-10-22",
    "value": 44
  },
  {
    "day": "2016-01-22",
    "value": 251
  },
  {
    "day": "2017-02-10",
    "value": 172
  },
  {
    "day": "2017-09-07",
    "value": 396
  },
  {
    "day": "2016-06-08",
    "value": 67
  },
  {
    "day": "2016-08-09",
    "value": 47
  },
  {
    "day": "2017-01-14",
    "value": 105
  },
  {
    "day": "2016-01-18",
    "value": 309
  },
  {
    "day": "2016-08-30",
    "value": 312
  },
  {
    "day": "2018-06-08",
    "value": 134
  },
  {
    "day": "2017-08-06",
    "value": 303
  },
  {
    "day": "2016-03-20",
    "value": 286
  },
  {
    "day": "2018-01-01",
    "value": 383
  },
  {
    "day": "2016-12-01",
    "value": 350
  },
  {
    "day": "2016-10-11",
    "value": 334
  },
  {
    "day": "2018-06-13",
    "value": 1
  },
  {
    "day": "2017-12-23",
    "value": 121
  },
  {
    "day": "2015-09-18",
    "value": 75
  },
  {
    "day": "2017-10-22",
    "value": 219
  },
  {
    "day": "2017-05-23",
    "value": 78
  },
  {
    "day": "2016-11-26",
    "value": 99
  },
  {
    "day": "2016-02-03",
    "value": 236
  },
  {
    "day": "2017-07-23",
    "value": 282
  },
  {
    "day": "2015-10-29",
    "value": 19
  },
  {
    "day": "2015-05-14",
    "value": 266
  },
  {
    "day": "2015-10-28",
    "value": 383
  },
  {
    "day": "2015-09-25",
    "value": 39
  },
  {
    "day": "2017-01-22",
    "value": 307
  },
  {
    "day": "2015-09-27",
    "value": 191
  },
  {
    "day": "2018-04-13",
    "value": 255
  },
  {
    "day": "2015-06-25",
    "value": 103
  },
  {
    "day": "2018-06-02",
    "value": 312
  },
  {
    "day": "2016-10-10",
    "value": 294
  },
  {
    "day": "2015-12-08",
    "value": 63
  },
  {
    "day": "2017-03-11",
    "value": 273
  },
  {
    "day": "2018-01-10",
    "value": 47
  },
  {
    "day": "2018-01-26",
    "value": 168
  },
  {
    "day": "2016-12-23",
    "value": 218
  },
  {
    "day": "2016-03-01",
    "value": 225
  },
  {
    "day": "2018-08-11",
    "value": 161
  },
  {
    "day": "2015-08-25",
    "value": 7
  },
  {
    "day": "2017-02-06",
    "value": 18
  },
  {
    "day": "2017-01-16",
    "value": 126
  },
  {
    "day": "2015-07-27",
    "value": 153
  },
  {
    "day": "2017-06-04",
    "value": 9
  },
  {
    "day": "2017-12-19",
    "value": 243
  },
  {
    "day": "2018-03-05",
    "value": 173
  },
  {
    "day": "2015-08-14",
    "value": 117
  },
  {
    "day": "2016-08-19",
    "value": 117
  },
  {
    "day": "2015-10-19",
    "value": 40
  },
  {
    "day": "2015-12-27",
    "value": 296
  },
  {
    "day": "2017-07-05",
    "value": 357
  },
  {
    "day": "2018-08-06",
    "value": 382
  },
  {
    "day": "2018-02-23",
    "value": 217
  },
  {
    "day": "2016-03-10",
    "value": 3
  },
  {
    "day": "2015-05-30",
    "value": 352
  },
  {
    "day": "2017-06-05",
    "value": 150
  },
  {
    "day": "2016-08-10",
    "value": 274
  },
  {
    "day": "2018-03-06",
    "value": 214
  },
  {
    "day": "2015-07-25",
    "value": 129
  },
  {
    "day": "2017-03-17",
    "value": 244
  },
  {
    "day": "2017-08-31",
    "value": 336
  },
  {
    "day": "2017-07-03",
    "value": 361
  },
  {
    "day": "2016-06-17",
    "value": 250
  },
  {
    "day": "2017-05-11",
    "value": 354
  },
  {
    "day": "2015-11-07",
    "value": 64
  },
  {
    "day": "2016-08-08",
    "value": 207
  },
  {
    "day": "2017-08-22",
    "value": 33
  },
  {
    "day": "2017-05-16",
    "value": 332
  },
  {
    "day": "2017-11-02",
    "value": 277
  },
  {
    "day": "2017-10-10",
    "value": 301
  },
  {
    "day": "2015-09-20",
    "value": 327
  },
  {
    "day": "2017-03-30",
    "value": 384
  },
  {
    "day": "2015-05-12",
    "value": 280
  },
  {
    "day": "2016-09-04",
    "value": 127
  },
  {
    "day": "2017-07-24",
    "value": 147
  },
  {
    "day": "2016-02-13",
    "value": 285
  },
  {
    "day": "2017-12-12",
    "value": 265
  },
  {
    "day": "2017-12-27",
    "value": 98
  },
  {
    "day": "2015-09-08",
    "value": 194
  },
  {
    "day": "2016-05-16",
    "value": 3
  },
  {
    "day": "2018-01-14",
    "value": 26
  },
  {
    "day": "2017-04-01",
    "value": 179
  },
  {
    "day": "2015-07-02",
    "value": 257
  },
  {
    "day": "2016-07-29",
    "value": 199
  },
  {
    "day": "2018-07-27",
    "value": 360
  },
  {
    "day": "2015-10-09",
    "value": 138
  },
  {
    "day": "2016-07-21",
    "value": 120
  },
  {
    "day": "2016-11-22",
    "value": 72
  },
  {
    "day": "2015-12-02",
    "value": 253
  },
  {
    "day": "2017-10-28",
    "value": 306
  },
  {
    "day": "2016-06-27",
    "value": 35
  },
  {
    "day": "2017-08-21",
    "value": 299
  },
  {
    "day": "2016-02-18",
    "value": 203
  },
  {
    "day": "2017-09-14",
    "value": 329
  },
  {
    "day": "2018-03-20",
    "value": 339
  },
  {
    "day": "2016-05-26",
    "value": 29
  },
  {
    "day": "2016-08-05",
    "value": 191
  },
  {
    "day": "2018-07-22",
    "value": 179
  },
  {
    "day": "2016-09-17",
    "value": 289
  },
  {
    "day": "2016-08-25",
    "value": 117
  },
  {
    "day": "2015-09-09",
    "value": 125
  },
  {
    "day": "2017-04-15",
    "value": 132
  },
  {
    "day": "2015-05-17",
    "value": 246
  },
  {
    "day": "2016-04-01",
    "value": 74
  },
  {
    "day": "2017-10-24",
    "value": 284
  },
  {
    "day": "2016-05-20",
    "value": 339
  },
  {
    "day": "2016-09-19",
    "value": 348
  },
  {
    "day": "2015-10-08",
    "value": 155
  },
  {
    "day": "2017-02-13",
    "value": 332
  },
  {
    "day": "2016-03-17",
    "value": 153
  },
  {
    "day": "2017-04-18",
    "value": 263
  },
  {
    "day": "2016-08-18",
    "value": 191
  },
  {
    "day": "2018-06-18",
    "value": 22
  },
  {
    "day": "2016-05-06",
    "value": 344
  },
  {
    "day": "2015-08-13",
    "value": 228
  },
  {
    "day": "2017-09-20",
    "value": 158
  },
  {
    "day": "2016-07-09",
    "value": 363
  },
  {
    "day": "2015-09-21",
    "value": 46
  },
  {
    "day": "2016-08-11",
    "value": 14
  },
  {
    "day": "2018-01-04",
    "value": 49
  },
  {
    "day": "2016-09-06",
    "value": 317
  },
  {
    "day": "2017-06-12",
    "value": 149
  },
  {
    "day": "2015-04-25",
    "value": 110
  },
  {
    "day": "2018-05-02",
    "value": 184
  },
  {
    "day": "2015-12-26",
    "value": 215
  },
  {
    "day": "2015-12-22",
    "value": 350
  },
  {
    "day": "2016-03-25",
    "value": 159
  },
  {
    "day": "2018-04-05",
    "value": 66
  },
  {
    "day": "2017-08-09",
    "value": 235
  },
  {
    "day": "2015-09-07",
    "value": 367
  },
  {
    "day": "2016-01-19",
    "value": 334
  },
  {
    "day": "2015-12-06",
    "value": 101
  },
  {
    "day": "2018-04-29",
    "value": 267
  },
  {
    "day": "2016-04-17",
    "value": 128
  },
  {
    "day": "2015-09-16",
    "value": 383
  },
  {
    "day": "2016-12-30",
    "value": 199
  },
  {
    "day": "2018-05-30",
    "value": 261
  },
  {
    "day": "2018-06-14",
    "value": 296
  },
  {
    "day": "2015-08-28",
    "value": 286
  },
  {
    "day": "2017-06-10",
    "value": 336
  },
  {
    "day": "2018-01-05",
    "value": 171
  },
  {
    "day": "2016-09-16",
    "value": 190
  },
  {
    "day": "2015-08-03",
    "value": 230
  },
  {
    "day": "2015-05-24",
    "value": 217
  },
  {
    "day": "2015-08-22",
    "value": 327
  },
  {
    "day": "2018-04-26",
    "value": 73
  },
  {
    "day": "2017-09-15",
    "value": 396
  },
  {
    "day": "2015-11-09",
    "value": 137
  },
  {
    "day": "2016-09-15",
    "value": 150
  },
  {
    "day": "2015-06-27",
    "value": 85
  },
  {
    "day": "2018-07-03",
    "value": 236
  },
  {
    "day": "2016-05-17",
    "value": 222
  },
  {
    "day": "2016-04-15",
    "value": 148
  },
  {
    "day": "2016-12-02",
    "value": 35
  },
  {
    "day": "2017-03-07",
    "value": 272
  },
  {
    "day": "2015-05-11",
    "value": 84
  },
  {
    "day": "2017-11-23",
    "value": 171
  },
  {
    "day": "2015-09-02",
    "value": 97
  },
  {
    "day": "2018-07-21",
    "value": 21
  },
  {
    "day": "2015-10-21",
    "value": 328
  },
  {
    "day": "2015-04-19",
    "value": 2
  },
  {
    "day": "2016-06-15",
    "value": 400
  },
  {
    "day": "2018-08-02",
    "value": 282
  },
  {
    "day": "2018-01-07",
    "value": 298
  },
  {
    "day": "2017-11-18",
    "value": 121
  },
  {
    "day": "2017-12-10",
    "value": 47
  },
  {
    "day": "2017-07-15",
    "value": 337
  },
  {
    "day": "2016-11-07",
    "value": 225
  },
  {
    "day": "2018-06-24",
    "value": 10
  },
  {
    "day": "2018-03-15",
    "value": 235
  },
  {
    "day": "2018-03-13",
    "value": 93
  },
  {
    "day": "2018-03-17",
    "value": 3
  },
  {
    "day": "2016-10-29",
    "value": 185
  },
  {
    "day": "2016-05-21",
    "value": 271
  },
  {
    "day": "2015-09-22",
    "value": 397
  },
  {
    "day": "2016-02-20",
    "value": 375
  },
  {
    "day": "2016-10-14",
    "value": 150
  },
  {
    "day": "2017-07-04",
    "value": 179
  },
  {
    "day": "2018-05-05",
    "value": 36
  },
  {
    "day": "2017-01-05",
    "value": 129
  },
  {
    "day": "2015-06-20",
    "value": 221
  },
  {
    "day": "2018-07-02",
    "value": 278
  },
  {
    "day": "2017-11-06",
    "value": 218
  },
  {
    "day": "2017-03-15",
    "value": 373
  },
  {
    "day": "2017-06-02",
    "value": 307
  },
  {
    "day": "2018-02-12",
    "value": 392
  },
  {
    "day": "2016-02-24",
    "value": 4
  },
  {
    "day": "2017-03-02",
    "value": 97
  },
  {
    "day": "2015-11-04",
    "value": 74
  },
  {
    "day": "2017-06-21",
    "value": 164
  },
  {
    "day": "2018-03-25",
    "value": 214
  },
  {
    "day": "2017-10-04",
    "value": 237
  },
  {
    "day": "2016-11-12",
    "value": 288
  },
  {
    "day": "2016-04-23",
    "value": 128
  },
  {
    "day": "2015-08-06",
    "value": 153
  },
  {
    "day": "2016-02-09",
    "value": 87
  },
  {
    "day": "2016-11-09",
    "value": 3
  },
  {
    "day": "2016-08-17",
    "value": 56
  },
  {
    "day": "2017-07-09",
    "value": 303
  },
  {
    "day": "2017-12-17",
    "value": 182
  },
  {
    "day": "2015-11-11",
    "value": 138
  },
  {
    "day": "2016-08-02",
    "value": 3
  },
  {
    "day": "2018-02-20",
    "value": 78
  },
  {
    "day": "2017-04-30",
    "value": 200
  },
  {
    "day": "2016-04-03",
    "value": 291
  },
  {
    "day": "2017-10-27",
    "value": 265
  },
  {
    "day": "2016-01-09",
    "value": 281
  },
  {
    "day": "2018-02-21",
    "value": 347
  },
  {
    "day": "2015-11-24",
    "value": 38
  },
  {
    "day": "2017-10-17",
    "value": 269
  },
  {
    "day": "2017-06-22",
    "value": 67
  },
  {
    "day": "2016-04-14",
    "value": 131
  },
  {
    "day": "2017-04-23",
    "value": 122
  },
  {
    "day": "2016-04-10",
    "value": 330
  },
  {
    "day": "2015-08-15",
    "value": 393
  },
  {
    "day": "2018-04-11",
    "value": 301
  },
  {
    "day": "2016-10-06",
    "value": 189
  },
  {
    "day": "2017-12-28",
    "value": 347
  },
  {
    "day": "2016-01-21",
    "value": 183
  },
  {
    "day": "2017-01-30",
    "value": 140
  },
  {
    "day": "2016-11-08",
    "value": 394
  },
  {
    "day": "2018-07-12",
    "value": 212
  },
  {
    "day": "2018-02-26",
    "value": 22
  },
  {
    "day": "2015-05-23",
    "value": 101
  },
  {
    "day": "2018-01-08",
    "value": 203
  },
  {
    "day": "2018-06-03",
    "value": 67
  },
  {
    "day": "2015-04-03",
    "value": 233
  },
  {
    "day": "2016-10-05",
    "value": 275
  },
  {
    "day": "2015-12-03",
    "value": 218
  },
  {
    "day": "2015-07-28",
    "value": 362
  },
  {
    "day": "2018-03-02",
    "value": 270
  },
  {
    "day": "2017-03-03",
    "value": 332
  },
  {
    "day": "2015-11-19",
    "value": 201
  },
  {
    "day": "2017-10-31",
    "value": 18
  },
  {
    "day": "2016-02-27",
    "value": 210
  },
  {
    "day": "2016-08-26",
    "value": 217
  },
  {
    "day": "2017-10-23",
    "value": 260
  },
  {
    "day": "2016-10-31",
    "value": 116
  },
  {
    "day": "2017-08-07",
    "value": 398
  },
  {
    "day": "2015-05-27",
    "value": 372
  },
  {
    "day": "2015-04-16",
    "value": 286
  },
  {
    "day": "2015-10-07",
    "value": 33
  },
  {
    "day": "2018-02-09",
    "value": 253
  },
  {
    "day": "2016-02-06",
    "value": 93
  },
  {
    "day": "2016-07-08",
    "value": 8
  },
  {
    "day": "2016-01-25",
    "value": 225
  },
  {
    "day": "2015-09-14",
    "value": 247
  },
  {
    "day": "2015-08-07",
    "value": 311
  },
  {
    "day": "2015-07-01",
    "value": 94
  },
  {
    "day": "2016-07-18",
    "value": 49
  },
  {
    "day": "2018-03-24",
    "value": 118
  },
  {
    "day": "2015-07-16",
    "value": 313
  },
  {
    "day": "2015-04-27",
    "value": 361
  },
  {
    "day": "2018-03-21",
    "value": 309
  },
  {
    "day": "2018-02-11",
    "value": 344
  },
  {
    "day": "2017-08-26",
    "value": 200
  },
  {
    "day": "2015-05-01",
    "value": 47
  },
  {
    "day": "2017-07-12",
    "value": 364
  },
  {
    "day": "2017-02-22",
    "value": 7
  },
  {
    "day": "2015-08-31",
    "value": 268
  },
  {
    "day": "2017-04-27",
    "value": 24
  },
  {
    "day": "2015-07-04",
    "value": 263
  },
  {
    "day": "2016-10-03",
    "value": 400
  },
  {
    "day": "2016-12-21",
    "value": 149
  },
  {
    "day": "2016-10-07",
    "value": 133
  },
  {
    "day": "2017-07-06",
    "value": 236
  },
  {
    "day": "2016-06-13",
    "value": 391
  },
  {
    "day": "2018-05-19",
    "value": 16
  },
  {
    "day": "2015-08-24",
    "value": 40
  },
  {
    "day": "2015-04-21",
    "value": 214
  },
  {
    "day": "2016-12-17",
    "value": 312
  },
  {
    "day": "2015-07-05",
    "value": 117
  },
  {
    "day": "2015-08-08",
    "value": 75
  },
  {
    "day": "2018-03-26",
    "value": 92
  },
  {
    "day": "2017-06-27",
    "value": 12
  },
  {
    "day": "2017-05-12",
    "value": 29
  },
  {
    "day": "2016-11-28",
    "value": 107
  },
  {
    "day": "2018-08-08",
    "value": 359
  },
  {
    "day": "2018-04-01",
    "value": 8
  },
  {
    "day": "2016-06-24",
    "value": 373
  },
  {
    "day": "2018-06-29",
    "value": 367
  },
  {
    "day": "2017-05-27",
    "value": 381
  },
  {
    "day": "2015-05-25",
    "value": 146
  },
  {
    "day": "2018-03-01",
    "value": 272
  },
  {
    "day": "2015-05-28",
    "value": 178
  },
  {
    "day": "2017-10-02",
    "value": 258
  },
  {
    "day": "2017-01-19",
    "value": 97
  },
  {
    "day": "2015-09-19",
    "value": 313
  },
  {
    "day": "2018-03-09",
    "value": 339
  },
  {
    "day": "2017-05-07",
    "value": 214
  },
  {
    "day": "2017-08-28",
    "value": 266
  },
  {
    "day": "2017-01-01",
    "value": 81
  },
  {
    "day": "2018-07-30",
    "value": 285
  },
  {
    "day": "2018-07-08",
    "value": 262
  },
  {
    "day": "2015-10-15",
    "value": 163
  },
  {
    "day": "2015-07-13",
    "value": 52
  },
  {
    "day": "2016-04-22",
    "value": 158
  },
  {
    "day": "2015-08-05",
    "value": 190
  },
  {
    "day": "2017-10-25",
    "value": 353
  }
]
