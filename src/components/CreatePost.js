import React from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {createPost} from '../reducers/actions';
import {useForm} from 'react-hook-form';
import {Redirect} from 'react-router-dom';
import {Container, Form, Button, Divider} from 'semantic-ui-react';
import SubpageHeader from './SubpageHeader';


const CreatePost = function(props) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [createdPost, setCreatedPost] = useState(null);
  const dispatch = useDispatch();
  const {register, handleSubmit, errors} = useForm();

  const categories = useSelector(state => state.categories);
  const subCategories = useSelector(state => state.subCategories);

  const categoryOptions = categories.map(c => {
    return {key: c.id, text: c.name, value: c.id};
  });

  function onMainCategorySelected(e, {value}) {
    setSelectedCategoryId(value);
    setSelectedSubCategoryId(null);
  };

  function visibleSubCategoryOptions() {
    if (selectedCategoryId === null) return [];
    return subCategories
      .filter(sc => sc.categoryId === selectedCategoryId)
      .map(sc => { return {key: sc.id, text: sc.name, value: sc.id} });
  };

  const onSubmit = data => {
    if (selectedSubCategoryId == null) return;
    data.subCategoryId = selectedSubCategoryId;
    data.date = new Date();
    setCreatedPost(data);
    dispatch(createPost(data));
  }

  return (
    <Container fluid>
      {createdPost &&
        <Redirect to={"/listing/" + selectedSubCategoryId} />
      }

      <SubpageHeader title="create a new post" />

      <Divider/>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group widths="equal">
          <Form.Select
            fluid label="main category"
            options={categoryOptions}
            onChange={onMainCategorySelected}
            placeholder="select a main category"
          />

          <Form.Select
            error={selectedSubCategoryId == null}
            name="subCategoryId"
            ref={() => register()}
            fluid label="sub category"
            disabled={selectedCategoryId === null}
            options={visibleSubCategoryOptions()}
            onChange={(e, {value}) => setSelectedSubCategoryId(value)}
            value={selectedSubCategoryId}
            placeholder="select a sub category"
          />
        </Form.Group>
        <Form.Field error={errors.title}>
          <label>title</label>
          <input
            name="title"
            ref={register({ required: "this field is required" })}
            error={errors.title}
          />
        </Form.Field>
        <Form.Field>
          <label>description</label>
          <textarea name="description" ref={register} />
        </Form.Field>
        <Button primary type="submit" disabled={selectedSubCategoryId == null}>Submit</Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
