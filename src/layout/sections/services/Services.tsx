import React from 'react';
import {S} from './Services_Styles'
import {Service} from "./service/Service";
import {Container} from "../../../components/common/Container";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Fade} from "react-awesome-reveal";
import {useTheme} from "styled-components";
import imgHtml from "../../../assets/images/services/html.png";
import imgTypescript from "../../../assets/images/services/typescript.png";
import imgReact from "../../../assets/images/services/react.png";
import imgPhp from "../../../assets/images/services/php.png";
import imgPython from "../../../assets/images/services/python.png";
import imgGolang from "../../../assets/images/services/golang.png";
import imgMysql from "../../../assets/images/services/mysql.png";
import imgPostgresql from "../../../assets/images/services/postgresql.png";
import imgRedis from "../../../assets/images/services/redis.png";
import imgRabbitmq from "../../../assets/images/services/rabbitmq.png";
import imgDocker from "../../../assets/images/services/docker.png";
import imgJenkins from "../../../assets/images/services/jenkins.png";
import imgArchitecture from "../../../assets/images/services/architecture.png";
import imgHighLoad from "../../../assets/images/services/highload.png";
import imgMicroservices from "../../../assets/images/services/microservices.png";

const items = [
    {
        title: "HTML / CSS",
        price: 2000,
        description: "Консультации, обучение, разработка",
        src: imgHtml,
    },
    {
        title: "JavaScript / TypeScript",
        price: 2000,
        description: "Консультации, обучение, разработка",
        src: imgTypescript,
    },
    {
        title: "React",
        price: 2500,
        description: "Скоро...",
        src: imgReact,
    },
    {
        title: "PHP",
        price: 2500,
        description: "Консультации, обучение, разработка",
        src: imgPhp,
    },
    {
        title: "Python",
        price: 2500,
        description: "Скоро...",
        src: imgPython,
    },
    {
        title: "Go",
        price: 3000,
        description: "Консультации, обучение, разработка",
        src: imgGolang,
    },
    {
        title: "MySQL / MariaDB",
        price: 3000,
        description: "Консультации, обучение",
        src: imgMysql,
    },
    {
        title: "PostgreSQL",
        price: 3000,
        description: "Скоро...",
        src: imgPostgresql,
    },
    {
        title: "Redis",
        price: 3500,
        description: "Консультации",
        src: imgRedis,
    },
    {
        title: "RabbitMQ",
        price: 3500,
        description: "Консультации",
        src: imgRabbitmq,
    },
    {
        title: "Docker",
        price: 4500,
        description: "Консультации, настройка",
        src: imgDocker,
    },
    {
        title: "CI/CD",
        price: 4500,
        description: "Консультации, настройка",
        src: imgJenkins,
    },
    {
        title: "Architecture Patterns",
        price: 5000,
        description: "Консультации, Code Review",
        src: imgArchitecture,
    },
    {
        title: "HighLoad",
        price: 5000,
        description: "Консультации",
        src: imgHighLoad,
    },
    {
        title: "Microservices",
        price: 5000,
        description: "Скоро...",
        src: imgMicroservices,
    },
];

export const Services: React.FC = () => {
    const theme = useTheme();

    return (
        <S.Services id={"services"}>
            <Container>
                <Fade triggerOnce={true} direction={"left"}>
                    <SectionTitle color={theme.color.primary}>Услуги</SectionTitle>
                </Fade>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"18px"}>
                    {items.map((item, index) => {
                        return <Service
                            key={index}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            src={item.src}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </S.Services>
    );
};
