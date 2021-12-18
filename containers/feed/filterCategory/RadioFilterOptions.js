import { Form, Radio } from "semantic-ui-react";


export default function RadioFilterOptions() {
    return (
      <div>
        <Form>
          <Form.Field>
                    <Radio label="Selected for you" defaultChecked className="my-3" />
                    <br />
            <Radio label="Most popular" className="my-3" />
          </Form.Field>
          <Form.Field>
            <Radio label="Most popular" className="my-3" />
          </Form.Field>
          <Form.Field>
            <Radio label="Most popular" className="my-3" />
          </Form.Field>
          <Form.Field>
            <Radio label="Most popular" className="my-3" />
          </Form.Field>
        </Form>
      </div>
    );
}


export const holdMapInfo = {
    label: ""
}