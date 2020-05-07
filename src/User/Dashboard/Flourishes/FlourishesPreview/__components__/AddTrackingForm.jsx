import React from "react";
import {Form, Field} from "react-final-form";

import {required} from "App/__utils__/rootValidators";

import InputText from "User/Dashboard/__components__/Form/InputText";
import InputSelect from "User/Dashboard/__components__/Form/InputSelect";
import InputSubmit from "User/Dashboard/__components__/Form/InputSubmit";
import InputReset from "User/Dashboard/__components__/Form/InputReset";
import FormHeader from "User/Dashboard/__components__/Form/FormHeader";

import styles from "User/Dashboard/__components__/Form/__styles__/Form.module.scss";

export default function AddTrackingForm({onSubmit}) {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        skill_level: "",
        what_improved: "",
        video_link: "",
      }}
      render={({handleSubmit, form, submitting, pristine}) => (
        <form onSubmit={handleSubmit}>
          <div className={styles["Form"]}>
            <FormHeader
              title="Add new Tracking"
              desc="Lorem ipsum dolor sit amet costam nie pamietam co dalej."
            />
            <div className={styles["FormBody"]}>
              <Field
                validate={required}
                name="skill_level"
                label="Skill Level:"
                component={InputSelect}
              >
                <option value="TO_BE_LEARNED">To be learned</option>
                <option value="BEGGINER">Begginer</option>
                <option value="AVERAGE">Average</option>
                <option value="SKILLED">Skilled</option>
                <option value="ADVANCED">Advanced</option>
                <option value="GODLIKE">Godlike</option>
              </Field>
              <Field
                name="video_link"
                type="text"
                label="Video Link:"
                placeholder="youtube.com, vimeo.com ..."
                component={InputText}
              />
              <Field
                name="what_improved"
                type="text"
                label="What Improved:"
                placeholder="Flourish is much more smoother ..."
                validate={required}
                component={InputText}
              />
            </div>
            <footer className={styles["FormFooter"]}>
              <div className={styles["FormFooter-buttons"]}>
                <InputReset
                  onClick={form.reset}
                  disabled={submitting || pristine}
                  value="Reset"
                />
                <InputSubmit
                  type="submit"
                  disabled={submitting || pristine}
                  value="Add"
                />
              </div>
            </footer>
          </div>
        </form>
      )}>
    </Form>
  );
}
