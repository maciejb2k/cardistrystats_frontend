import React from "react";
import {Form, Field} from "react-final-form";
import {NavLink} from "react-router-dom";

import {required} from "App/__utils__/rootValidators";
import {ROUTES} from "App/constants";

import styles from "./FlourishesAdd.module.scss";

export default function FlourishesAdd(props) {
  const {addNewFlourish} = props;

  const addFlourish = (values) => {
    addNewFlourish(values);
  };

  return (
    <div className="DashPage">
      <div className={styles["FormWrapper"]}>
        <div className={styles["Form"]}>
          <header className={styles["FormHeader"]}>
            <h1 className={styles["FormHeader-title"]}>Add new flourish</h1>
            <p className={styles["FormHeader-desc"]}>Expand your flourishes collection and add new cuts.</p>
          </header>
          <Form
            onSubmit={addFlourish}
            initialValues={{name: "", desc: "", creator: "", category: null}}
            render={({handleSubmit, form, submitting, pristine, values}) => (
              <form onSubmit={handleSubmit}>
                <div className={styles["FormBody"]}>
                  <Field
                    validate={required}
                    name="name"
                  >
                    {({input, meta}) => (
                      <div className={styles["InputWrapper"]}>
                        <div className={styles["InputHeader"]}>
                          <label className={styles["Label"]}>
                            Name:
                          </label>
                          {meta.error && meta.touched &&
                            <span className={styles["Error"]}>
                              {meta.error}
                            </span>
                          }
                        </div>
                        <input
                          {...input}
                          type="text"
                          placeholder="eg. Squeeze Cut"
                          className={`
                            ${styles["Input"]}
                            ${styles["Input--text"]}
                            ${meta.error && meta.touched ? `${styles["Input--error"]}` : ""}
                          `}
                        />
                      </div>
                    )}
                  </Field>
                  <Field
                    name="desc"
                  >
                    {({input, meta}) => (
                      <div className={styles["InputWrapper"]}>
                        <div className={styles["InputHeader"]}>
                          <label className={styles["Label"]}>
                            Description:
                          </label>
                          {meta.error && meta.touched &&
                            <span className={styles["Error"]}>
                              {meta.error}
                            </span>
                          }
                        </div>
                        <input
                          {...input}
                          type="text"
                          placeholder="eg. My first learned flourish."
                          className={`
                            ${styles["Input"]}
                            ${styles["Input--text"]}
                            ${meta.error && meta.touched ? `${styles["Input--error"]}` : ""}
                          `}
                        />
                      </div>
                    )}
                  </Field>
                  <Field
                    name="creator"
                  >
                    {({input, meta}) => (
                      <div className={styles["InputWrapper"]}>
                        <div className={styles["InputHeader"]}>
                          <label className={styles["Label"]}>
                            Creator:
                          </label>
                          {meta.error && meta.touched &&
                            <span className={styles["Error"]}>
                              {meta.error}
                            </span>
                          }
                        </div>
                        <input
                          {...input}
                          type="text"
                          placeholder="eg. The Virts."
                          className={`
                            ${styles["Input"]}
                            ${styles["Input--text"]}
                            ${meta.error && meta.touched ? `${styles["Input--error"]}` : ""}
                          `}
                        />
                      </div>
                    )}
                  </Field>
                  <Field
                    validate={required}
                    name="category"
                  >
                    {({input, meta}) => (
                      <div className={styles["InputWrapper"]}>
                        <div className={styles["InputHeader"]}>
                          <label className={styles["Label"]}>
                            Category:
                          </label>
                          {meta.error && meta.touched &&
                            <span className={styles["Error"]}>
                              {meta.error}
                            </span>
                          }
                        </div>
                        <select
                          {...input}
                          className={`
                            ${styles["Input"]}
                            ${styles["Input--select"]}
                            ${meta.error && meta.touched ? `${styles["Input--error"]}` : ""}
                          `}
                        >
                          <option></option>
                          <option className={styles["Input-selectEl"]} value="TWO_HANDED">Two Handed</option>
                          <option value="ONE_HANDED">One Handed</option>
                          <option value="AERIALS">Aerials</option>
                          <option value="SPINS">Spins</option>
                          <option value="TWIRLS">Twirls</option>
                          <option value="DISPLAYS">Displays</option>
                          <option value="FANS">Fans</option>
                          <option value="SHUFFLES">Shuffles</option>
                          <option value="ISOLATIONS">Isolations</option>
                          <option value="OTHERS">Others</option>
                        </select>
                      </div>
                    )}
                  </Field>
                </div>
                <footer className={styles["FormFooter"]}>
                  <div className={styles["FormFooter-links"]}>
                    <NavLink className={styles["FormFooter-back"]} to={ROUTES.USER.FLOURISHES.LIST}>
                      Back to flourishes list
                    </NavLink>
                  </div>
                  <div className={styles["FormFooter-buttons"]}>
                    <button
                      className={`${styles["Button"]} ${styles["Button--reset"]}`}
                      onClick={form.reset}
                      disabled={submitting || pristine}>
                      Reset
                    </button>
                    <button
                      className={`${styles["Button"]} ${styles["Button--submit"]}`}
                      type="submit"
                      disabled={submitting || pristine}>
                      Add
                    </button>
                  </div>
                </footer>
              </form>
            )}>
          </Form>
        </div>
      </div >
    </div>
  );
}
