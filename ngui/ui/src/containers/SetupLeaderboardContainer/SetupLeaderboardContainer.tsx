import { useNavigate, useParams } from "react-router-dom";
import SetupLeaderboard from "components/SetupLeaderboard";
import MlDatasetsService from "services/MlDatasetsService";
import MlLeaderboardsService from "services/MlLeaderboardsService";
import MlTasksService from "services/MlTasksService";
import { getMlTaskDetailsUrl } from "urls";

const SetupLeaderboardContainer = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const mlTaskDetailsUrl = getMlTaskDetailsUrl(taskId);

  const { useGetOne, useGetTaskTags } = MlTasksService();
  const { isLoading: isGetTaskLoading, task } = useGetOne(taskId);
  const { isLoading: isGetTaskTagsLoading, tags } = useGetTaskTags(taskId);

  const { useGetLabels: useGetDatasetLabels } = MlDatasetsService();
  const { isLoading: isGetDatasetLabelsLoading, labels: datasetLabels } = useGetDatasetLabels();

  const { useCreateLeaderboard } = MlLeaderboardsService();
  const { isLoading: isCreateLeaderboardLoading, onCreate } = useCreateLeaderboard();

  return (
    <SetupLeaderboard
      onSetup={(formData) => {
        onCreate(taskId, formData).then(() => navigate(mlTaskDetailsUrl));
      }}
      task={task}
      groupingTags={tags}
      datasetLabels={datasetLabels}
      isLoadingProps={{
        isGetTaskLoading,
        isGetTaskTagsLoading,
        isGetDatasetLabelsLoading,
        isSetupLoading: isCreateLeaderboardLoading
      }}
    />
  );
};

export default SetupLeaderboardContainer;
