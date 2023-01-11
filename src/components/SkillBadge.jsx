import { Badge } from "react-bootstrap";

const SkillBadge = ({ text }) => {
  return (
    <Badge className="badge" bg="secondary">
      {text}
    </Badge>
  );
};

export default SkillBadge;
