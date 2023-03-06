import PropTypes from 'prop-types';
import { StatsSection, DataEl } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      <h2>{title}</h2>
      <ul>
        {stats.map(({ id, label, percentage }) => (
          <DataEl key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
          </DataEl>
        ))}
      </ul>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
