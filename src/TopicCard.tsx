import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import SampleData from './Data';

let topicSampleData = SampleData.section2
let discussionData = SampleData.section3

function TopicCard({status}: any) {
  // const [status, setStatus] = useState('summary');
  if (status === 'summary') {
    return (
      <Card style={{marginLeft: '7px'}}>
      <Card.Header>
        <h6>
          Topic <Badge pill bg="info">{topicSampleData.length}</Badge>
        </h6>
      </Card.Header>
      <Card.Body style={{height: '100%'}}>
        <Accordion defaultActiveKey="0">
          {topicSampleData.map(function (data) {
            return (
              <Accordion.Item eventKey={data.id}>
                <Accordion.Header>{data.keywords}</Accordion.Header>
                <Accordion.Body>
                  <div className="topic-content">
                    <p style={{ paddingLeft: '5px' }}><strong>Reviewer&nbsp; &nbsp; &nbsp; <span>{data.reviewers}</span></strong> </p>
                    <Card bg='#F0F2FC' style={{ marginBottom: '15px', backgroundColor: '#F0F2FC' }}>
                      <Card.Body>
                        {data.summary}
                      </Card.Body>
                    </Card>
                    <Button variant="primary">Prompt</Button>{' '}
                  </div>

                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Card.Body>
    </Card>
    )
  }
  return (
    <Card>
      <Card.Header>
        <h6>
          Topic <Badge pill bg="info">{discussionData.length}</Badge>
        </h6>
      </Card.Header>
      <Card.Body>
        <Accordion defaultActiveKey="0">
          {discussionData.map(function (data) {
            return (
              <Accordion.Item eventKey={data.id}>
                <Accordion.Header>{data.topic_keywords}</Accordion.Header>
                <Accordion.Body>
                  <div className="topic-content">
                    <p style={{ paddingLeft: '5px' }}><strong>Reviewer&nbsp; &nbsp; &nbsp; <span>{data.reviewer_involved}</span></strong> </p>
                    <Card bg='#F0F2FC' style={{ marginBottom: '15px', backgroundColor: '#F0F2FC' }}>
                      <Card.Body>
                        {data.summary}
                      </Card.Body>
                    </Card>
                    <Button variant="primary">Prompt</Button>{' '}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Card.Body>
    </Card>
  );
}

export default TopicCard;