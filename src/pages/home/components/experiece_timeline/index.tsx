import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper } from "@material-ui/core";
import experience_datas from "../../../../data/experience_data";
import style from "./index.module.scss";

const paperstyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#3333",
  borderRadius: "20px",
};

const timestyle: React.CSSProperties = {
  width: "100vw",
  color: "#d1d5db",
};

const ExperienceTimeLine: React.FC = () => {
  const isMobile = window.innerWidth <= 768; // Check if it's mobile based on width

  return (
    <div>
      <Timeline
        align={isMobile ? "left" : "alternate"}
        style={timestyle}
        className={isMobile ? style.timelineLeft : style.timeline}
      >
        {experience_datas.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="inherit" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} style={paperstyle}>
                <div className={style.experience_card}>
                  <div className={style.experience_card_image}>
                    <img src={item.image} alt="Logo" />
                  </div>
                  <div>
                    <h1>{item.title}</h1>
                    <ul>
                      {item.competence.map((e, index) => (
                        <li key={index}>{e}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h1>
                      {item.nivel} - {item.type_local}
                    </h1>
                    <h3>Início: {item.start}</h3>
                    {item.atual ? (
                      <h3 className={style.atual_atext}>
                        Onde estou atualmente...
                      </h3>
                    ) : (
                      <h3>Fim: {item.End}</h3>
                    )}
                  </div>
                </div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default ExperienceTimeLine;
