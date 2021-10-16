import { Route } from "react-router-dom"

export const ApplicationViews = () => {

  return (
    <>

      <Route exact path="/">
        <Dashboard />
      </Route>

      <Route exact path="/connections">
        <Connections />
      </Route>

      <Route exact path="/connections/create">
        <ConnectionForm />
      </Route>

      <Route exact path="/connections/:connectionId(\d+)/edit">
        <ConnectionEditForm />
      </Route>

      <Route exact path="/activities">
        <Activities />
      </Route>

      <Route exact path="/activities/create">
        <ActivityForm />
      </Route>

      <Route exact path="/activities/:activityId(\d+)/edit">
        <ActivityEditForm />
      </Route>

      <Route exact path="/todos">
        <Todos />
      </Route>

      <Route exact path="/tasks/create">
        <TodoForm />
      </Route>

      <Route exact path="/todos/:todoId(\d+)/edit">
        <TodoEditForm />
      </Route>

      <Route exact path="/notes">
        <Notes />
      </Route>

      <Route exact path="/notes/create">
        <NoteForm />
      </Route>

      <Route exact path="/notes/:noteId(\d+)/edit">
        <NoteEditForm />
      </Route>

      <Route exact path="/journals">
        <Journals />
      </Route>

      <Route exact path="/journals/create">
        <JournalForm />
      </Route>

      <Route exact path="/journals/:journalId(\d+)/edit">
        <JournalEditForm />
      </Route>
    </>
  );
};
