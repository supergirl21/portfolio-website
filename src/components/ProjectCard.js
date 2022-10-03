/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// eslint-disable-next-line semi
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col xs={12} md={6}>
      {/* <Col sm={8} md={6}> */}
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img-Urls" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
    // eslint-disable-next-line semi
  );
}
// eslint-disable-next-line semi
export default ProjectCard;
