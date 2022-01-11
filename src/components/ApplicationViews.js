import { Route } from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Dashboard } from "../../src/components/dashboard/Dashboard";
import { ConnectionBoard } from "./connections/ConnectionBoard";
import { ConnectionForm } from "../../src/components/connections/ConnectionForm";
import { ConnectionEditForm } from "../../src/components/connections/ConnectionEditForm";
import { ConnectionDetail } from "../../src/components/connections/ConnectionDetail";
import { UserDetail } from "./users/UserDetail";
import { UserEditForm } from "../../src/components/users/UserEditForm";
import { ActivityBoard } from "../../src/components/activities/ActivityBoard";
import { ActivityTagBoard } from "../../src/components/activities/ActivityTagBoard";
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
import { ListBoard } from "../../src/components/lists/ListBoard";
import { ProviderForm } from "../../src/components/lists/ProviderForm";
import { ProviderEditForm } from "../../src/components/lists/ProviderEditForm";
import { RecommendBoard } from "../../src/components/lists/RecommendBoard";
import { RecommendationForm } from "../../src/components/lists/RecommendationForm";
import { RecommendationEditForm } from "../../src/components/lists/RecommendationEditForm";
import { WishlistForm } from "../../src/components/lists/WishlistForm";
import { WishlistEditForm } from "../../src/components/lists/WishlistEditForm";
import { PrintGroceryList } from "../../src/components/groceries/GroceryPrint";
import { PrintWishlist } from "../../src/components/lists/WishlistPrint";

export const ApplicationViews = ({
  setAuthUser,
  isAuthenticated,
  clearUser,
}) => {
  return (
    <>
      <Route path="/">
        {isAuthenticated ? (
          <Sidebar isAuthenticated={isAuthenticated} clearUser={clearUser} />
        ) : null}
      </Route>

      <Route exact path="/">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route exact path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>

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

      <Route exact path="/activitiestag">
        <ActivityTagBoard />
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

      <Route exact path="/lists">
        <ListBoard />
      </Route>

      <Route exact path="/providers/create">
        <ProviderForm />
      </Route>

      <Route exact path="/providers/:providerId(\d+)/edit">
        <ProviderEditForm />
      </Route>

      <Route exact path="/recommendations/create">
        <RecommendationForm />
      </Route>

      <Route exact path="/recommendations/:recommendationId(\d+)/edit">
        <RecommendationEditForm />
      </Route>

      <Route exact path="/recommendations">
        <RecommendBoard />
      </Route>

      <Route exact path="/wishlists/create">
        <WishlistForm />
      </Route>

      <Route exact path="/wishlists/:wishlistId(\d+)/edit">
        <WishlistEditForm />
      </Route>

      <Route exact path="/groceries/print">
        <PrintGroceryList />
      </Route>

      <Route exact path="/wishlists/print">
        <PrintWishlist />
      </Route>
    </>
  );
};
