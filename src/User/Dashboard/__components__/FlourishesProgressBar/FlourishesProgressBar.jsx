import React from "react";
import {
  ProgressBar,
  ProgressFragment,
  ProgressIndicator,
  ProgressState,
} from "./FlourishesProgressBar.styled";

export default function FlourishesProgressBar(props) {
  const {progress} = props;
  return (
    <ProgressBar>
      <ProgressIndicator toLeft="true" />
      <ProgressState active="true" toLeft="true">
        0%
      </ProgressState>
      {progress === 0
        ? (
          <ProgressIndicator toLeft="true" bg="#e74c3c">
            <span>To be learned</span>
          </ProgressIndicator>
        )
        : null
      }
      {progress > 0
        ? (
          <ProgressFragment bgFrom="#e74c3c" bgTo="#e67e22">
            <ProgressIndicator bg="#e74c3c" toLeft="true">
              <span>To be learned</span>
            </ProgressIndicator>
            <ProgressIndicator bg="#e67e22">
              <span>Begginer</span>
            </ProgressIndicator>
            <ProgressState active="true">
              20%
            </ProgressState>
          </ProgressFragment>
        )
        : (
          <ProgressFragment >
            <ProgressIndicator>
              <span>Begginer</span>
            </ProgressIndicator>
            <ProgressState>20%</ProgressState>
          </ProgressFragment>
        )
      }
      {progress > 20
        ? (
          <ProgressFragment bgFrom="#e67e22" bgTo="#f1c40f">
            <ProgressIndicator bg="#f1c40f">
              <span>Average</span>
            </ProgressIndicator>
            <ProgressState active="true">
              40%
            </ProgressState>
          </ProgressFragment>
        )
        : (
          <ProgressFragment >
            <ProgressIndicator>
              <span>Average</span>
            </ProgressIndicator>
            <ProgressState>40%</ProgressState>
          </ProgressFragment>
        )
      }
      {progress > 40
        ? (
          <ProgressFragment bgFrom="#f1c40f" bgTo="#47b372">
            <ProgressIndicator bg="#47b372">
              <span>Skilled</span>
            </ProgressIndicator>
            <ProgressState active="true">
              60%
            </ProgressState>
          </ProgressFragment>
        )
        : (
          <ProgressFragment >
            <ProgressIndicator>
              <span>Skilled</span>
            </ProgressIndicator>
            <ProgressState>60%</ProgressState>
          </ProgressFragment>
        )
      }
      {progress > 60
        ? (
          <ProgressFragment bgFrom="#50c780" bgTo="#00a8ff">
            <ProgressIndicator bg="#00a8ff">
              <span>Advanced</span>
            </ProgressIndicator>
            <ProgressState active="true">
              80%
            </ProgressState>
          </ProgressFragment>
        )
        : (
          <ProgressFragment >
            <ProgressIndicator>
              <span>Advanced</span>
            </ProgressIndicator>
            <ProgressState>80%</ProgressState>
          </ProgressFragment>
        )
      }
      {progress > 80
        ? (
          <ProgressFragment bgFrom="#00a8ff" bgTo="#8c7ae6">
            <ProgressIndicator bg="#8c7ae6">
              <span>Godlike</span>
            </ProgressIndicator>
            <ProgressState active="true">
              100%
            </ProgressState>
          </ProgressFragment>
        )
        : (
          <ProgressFragment >
            <ProgressIndicator>
              <span>Godlike</span>
            </ProgressIndicator>
            <ProgressState>100%</ProgressState>
          </ProgressFragment>
        )
      }

    </ProgressBar>
  );
}
