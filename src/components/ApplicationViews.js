import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import { Dashboard } from "../../src/components/dashboard/Dashboard"
import { ConnectionBoard } from "./userConnections/ConnectionBoard"
import { ConnectionForm } from "../../src/components/userConnections/ConnectionForm"
import { ConnectionEditForm } from "../../src/components/userConnections/ConnectionEditForm"
import { ActivityBoard } from "../../src/components/activities/ActivityBoard"
import { ActivityForm } from "../../src/components/activities/ActivityForm"
import { ActivityEditForm } from "../../src/components/activities/ActivityEditForm"
import { TodoBoard } from "../../src/components/todos/TodoBoard"
import { TodoForm } from "../../src/components/todos/TodoForm"
import { TodoEditForm } from "../../src/components/todos/TodoEditForm"
import { NoteBoard } from "../../src/components/notes/NoteBoard"
import { NoteForm } from "../../src/components/notes/NoteForm"
import { NoteEditForm } from "../../src/components/notes/NoteEditForm"
// import { JournalBoard } from "../../src/components/journals/JournalBoard"
// import { JournalForm } from "../../src/components/journals/JournalForm"
// import { JournalEditForm } from "../../src/components/journals/JournalEditForm"

export const ApplicationViews = () => {

  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route exact path="/connections" component={ConnectionBoard} />

          {/* <Route exact path="/connections/create">
            <ConnectionForm />
          </Route>

          <Route exact path="/connections/:connectionId(\d+)/edit">
            <ConnectionEditForm />
          </Route>

          <Route exact path="/activities">
            <ActivityBoard />
          </Route>
    
          <Route exact path="/activities/create">
            <ActivityForm />
          </Route>

          <Route exact path="/activities/:activityId(\d+)/edit">
            <ActivityEditForm />
          </Route>

          <Route exact path="/todos">
            <TodoBoard />
          </Route>
    
          <Route exact path="/todos/create">
            <TodoForm />
          </Route>

          <Route exact path="/todos/:todoId(\d+)/edit">
            <TodoEditForm />
          </Route>

          <Route exact path="/notes">
            <NoteBoard />
          </Route>

          <Route exact path="/notes/create">
            <NoteForm />
          </Route>

          <Route exact path="/notes/:noteId(\d+)/edit">
            <NoteEditForm />
          </Route> */}

          {/* <Route exact path="/journals">
            <JournalBoard />
          </Route> */}
    {/* 
          <Route exact path="/journals/create">
            <JournalForm />
          </Route>

          <Route exact path="/journals/:journalId(\d+)/edit">
            <JournalEditForm />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
};
