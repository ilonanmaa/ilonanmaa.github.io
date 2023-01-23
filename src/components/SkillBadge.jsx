import { Badge } from "react-bootstrap";

/**Component for individual skill badges, used in Projects- and Skills-components  */
const SkillBadge = ({ text }) => {
  return (
    <Badge className="badge" bg="secondary">
      {text}
    </Badge>
  );
};

export default SkillBadge;
