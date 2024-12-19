import { Route, Routes } from 'react-router-dom';
import Homeapge from './views/homepage';
import Layout from './components/layout';
import RecentPage from './views/RecentPage';
import NotFoundPage from './views/pagenotfound';
import StarredPage from './views/starredPage';
import DraftPage from './views/draftPage';
import TemplatesPage from './views/templates';
import TasksPage from './views/tasksPage';
import AllContent from './views/allcontent';
import DocumentPage from './views/documentpage';
import Layout2 from './components/layout2';
function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Homeapge />} />
          <Route path='/starred-page' element={<StarredPage />} />
          <Route path='/recents' element={<RecentPage />} />
          <Route path='/drafts' element={<DraftPage />} />
          <Route path='/tasks' element={<TasksPage />} />
        </Route>
        <Route path='/template' element={<TemplatesPage />} />
        <Route path='/' element={<Layout2 />}>
          <Route path='/documentpage' element={<DocumentPage />} />
          <Route path="/allcontent" element={<AllContent />} />

        </Route>

      </Routes>
    </>
  );
}

export default App;
