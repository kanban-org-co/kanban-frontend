import { KanbanBoard } from "@/widgets/kanban-board";

import { PageWrapper } from "./dashboard.styles";

const Dashboard = () => {
  return (
    <PageWrapper>
      <KanbanBoard/>
    </PageWrapper>
  );
};

export default Dashboard;
