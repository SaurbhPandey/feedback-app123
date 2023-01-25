import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is my first react project to leave feedback for product or service</p>
            <p>Version : 1.0.4</p>

            <p>
                <Link to='/'>Back to Home </Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage
