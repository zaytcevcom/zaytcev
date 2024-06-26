import React from 'react';
import {S} from './Works_Styles'
import logoCyberMetape from "../../../assets/images/works/cybermetape.png";
import logoEventor from "../../../assets/images/works/eventor.png";
import logoSabtrans from "../../../assets/images/works/sabtrans.png";
import logoLO from "../../../assets/images/works/lo.svg";
import logoWLG from "../../../assets/images/works/welovegames.webp";
import logoPostoRub from "../../../assets/images/works/postorub.png";
import logoSocModer from "../../../assets/images/works/socmoder.png";
import {Work} from "./work/Work";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Container} from "../../../components/common/Container";
import {Fade} from "react-awesome-reveal";

const items = [
    {
        title: "Eventor",
        description: "Разработка API для мобильного приложения по поиску организаторов мероприятий",
        src: logoEventor,
    },
    {
        title: "CYBERMETAPE",
        description: "Разработка сайта и смарт-контракта для NFT коллекции из 7,777 элементов",
        src: logoCyberMetape,
    },
    {
        title: "Sabtrans",
        description: "Разработка ERP-системы для управления арендой спецтехники, включающей в себя модули для учета оборудования, заказов, клиентов, звонков, лидов, финансов и других важных процессов",
        src: logoSabtrans,
    },
    {
        title: "Grab",
        description: "Разработка агрегатора данных со стриминговых сервисов",
        src: undefined,
        backgroundFirst: "#F44336",
        backgroundSecond: "#F44336",
    },
    {
        title: "LO.ink",
        description: "Разработка backend-архитектуры и API для цифрового мира LO. Общение, звонки, музыкальный стриминг, публикации, полнотекстовый поиск, уведомления, сообщества, места и события",
        src: logoLO,
    },
    {
        title: "MEGA-ERP",
        description: "Разработка и внедрение универсальной ERP системы",
        src: undefined,
        backgroundFirst: "#F9A825",
        backgroundSecond: "#F9A825",
    },
    {
        title: "WLG.TV",
        description: "Разработка веб-сайта для Twitch-канала WELOVEGAMES, включающего информацию о канале, новости, анонсы событий, обзоры игр и функционал проведения розыгрышей",
        src: logoWLG,
    },
    {
        title: "СТУД-ХАК",
        description: "Разработка платформы для обмена рефератами и курсовыми работами между студентами вузов",
        src: undefined,
        backgroundFirst: "#0D47A1",
        backgroundSecond: "#0D47A1",
    },
    {
        title: "PostoRub",
        description: "Разработка сервиса для модерации контента с системой вознаграждения модераторов",
        src: logoPostoRub,
    },
    {
        title: "Анализатор",
        description: "Разработка приложения для анализа друзей и сообществ ВК",
        src: undefined,
        backgroundFirst: "#42A5F5",
        backgroundSecond: "#42A5F5",
    },
    {
        title: "SocModer",
        description: "Разработка онлайн-сервиса для администраторов сообществ ВКонтакте. Автопостинг, Антиспам, Обмен рекламой, Лайк-Тайм",
        src: logoSocModer,
    },
    {
        title: "Лайкинг",
        description: "Разработка приложение по обмену лайками для соц. сети ВКонтакте",
        src: undefined,
        backgroundFirst: "#B06AB3",
        backgroundSecond: "#B06AB3",
    },
];

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <Fade triggerOnce={true} direction={"left"}>
                    <SectionTitle>Портфолио</SectionTitle>
                </Fade>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"8px"}>
                    {items.map((item, index) => {
                        return <Work
                            key={index}
                            title={item.title}
                            description={item.description}
                            src={item.src}
                            backgroundFirst={item.backgroundFirst}
                            backgroundSecond={item.backgroundSecond}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
