import {useReducer, useEffect} from "react";
import * as RF from "redux-form";

export default function useForm(options) {
  const {form, initialValues, onSubmit, ...otherMeta} = options;
  const [store, dispatch] = useReducer(RF.reducer, {});
  const formValues = store[form] && store[form].values;

  useEffect(() => {
    dispatch(RF.initialize(form, initialValues, false, otherMeta));

    return () => {
      dispatch(RF.destroy(form));
    };
  }, [form, initialValues, otherMeta]);

  return {
    store,
    reset: () => {
      dispatch(RF.reset(form));
    },
    handleSubmit: (e) => {
      e.preventDefault();
      onSubmit(formValues);
    },
    useField: (name) => {
      useEffect(() => {
        dispatch(RF.registerField(form, name, RF.Field));

        return () => {
          dispatch(RF.unregisterField(form, name));
        };
      }, [name]);

      return {
        input: {
          value: (formValues && formValues[name]) || null,
          onChange: (e) => dispatch(RF.change(form, name, e.target.value)),
        },
      };
    },
  };
}
