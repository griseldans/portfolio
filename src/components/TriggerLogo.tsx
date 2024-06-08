import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const TriggerLogo = () => {
    const renderTooltip = () => (
        <Tooltip id="button-tooltip">
          Simple tooltip
        </Tooltip>
      );

      return (
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant="success">Hover me to see</Button>
        </OverlayTrigger>
      );
}

export default TriggerLogo;