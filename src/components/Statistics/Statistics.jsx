import PropTypes from "prop-types";

import { SectionStats } from "./Statistics.styled";
import { TitleStats } from "./Statistics.styled";
import { ListStat } from "./Statistics.styled";
import { ItemStats } from "./Statistics.styled";
import { Сoefficient } from "./Statistics.styled";

export const StaticList = ({ stats, title }) => {
    return (
        <SectionStats>
            {title && (<TitleStats>{title}</TitleStats>)}
            <ListStat>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <ItemStats key={id}>
                            <span>{label}</span>
                            <Сoefficient>{percentage}%</Сoefficient>
                        </ItemStats>
                    );
                })}
            </ListStat>
        </SectionStats>
    )
}


StaticList.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}