import { Route } from "react-router-dom";
import { Dashboard } from "../../src/components/dashboard/Dashboard";
import { ConnectionBoard } from "./connections/ConnectionBoard";
import { ConnectionForm } from "../../src/components/connections/ConnectionForm";
import { ConnectionEditForm } from "../../src/components/connections/ConnectionEditForm";
import { ConnectionDetail } from "../../src/components/connections/ConnectionDetail";
import { UserDetail } from "./users/UserDetail";
import { UserEditForm } from "../../src/components/users/UserEditForm";
import { ActivityBoard } from "../../src/components/activities/ActivityBoard";
import { ActivityForm } from "../../src/components/activities/ActivityForm";
import { ActivityEditForm } from "../../src/components/activities/ActivityEditForm";
import { TodoBoard } from "../../src/components/todos/TodoBoard";
import { TodoForm } from "../../src/components/todos/TodoForm";
import { TodoEditForm } from "../../src/components/todos/TodoEditForm";
import { NoteBoard } from "../../src/components/notes/NoteBoard";
import { NoteForm } from "../../src/components/notes/NoteForm";
import { NoteEditForm } from "../../src/components/notes/NoteEditForm";
import { GroceryBoard } from "../../src/components/groceries/GroceryBoard";
import { GroceryForm } from "../../src/components/groceries/GroceryForm";
import { GroceryEditForm } from "../../src/components/groceries/GroceryEditForm";
import { JournalBoard } from "../../src/components/journals/JournalBoard";
import { JournalForm } from "../../src/components/journals/JournalForm";
import { JournalEditForm } from "../../src/components/journals/JournalEditForm";
import { GroceryPrint } from "../../src/components/groceries/GroceryPrint";

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>

      <Route exact path="/connections">
        <ConnectionBoard />
      </Route>

      <Route exact path="/connections/create">
        <ConnectionForm />
      </Route>

      <Route exact path="/connections/:connectionId(\d+)/edit">
        <ConnectionEditForm />
      </Route>

      <Route exact path="/connections/:connectionId(\d+)">
        <ConnectionDetail />
      </Route>

      <Route exact path="/users/:userId(\d+)">
        <UserDetail />
      </Route>

      <Route exact path="/users/:userId(\d+)/edit">
        <UserEditForm />
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
      </Route>

      <Route exact path="/groceries">
        <GroceryBoard />
      </Route>

      <Route exact path="/groceries/create">
        <GroceryForm />
      </Route>

      <Route exact path="/groceries/:groceryId(\d+)/edit">
        <GroceryEditForm />
      </Route>

      <Route exact path="/journals">
        <JournalBoard />
      </Route>

      <Route exact path="/journals/create">
        <JournalForm />
      </Route>

      <Route exact path="/journals/:journalId(\d+)/edit">
        <JournalEditForm />
      </Route>

      <Route exact path="/print">
        <GroceryPrint />
      </Route>
    </>
  );
};
