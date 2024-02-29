import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import { useOutletContext } from "react-router-dom";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext() as ChartProps;
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinHistory(coinId)
  });
  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => parseFloat(price.close)) as number[]
            }
          ]}
          options={{
            theme: {
              mode: "dark"
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false
              },
              background: "transparent"
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4
            },
            yaxis: {
              show: false
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) =>
                new Date(price.time_close * 1000).toUTCString()
              )
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] }
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`
              }
            }
          }}
        />
      )}
    </div>
  );
}

export default Chart;
