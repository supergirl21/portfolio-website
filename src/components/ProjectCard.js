import { Col } from "react-bootstrap";
import imgUrl from "../assets/img/project-img1.png";

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
  );
}
export default ProjectCard;
