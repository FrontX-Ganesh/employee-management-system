import AuthProvider from "./context/AuthProvider";
import AppContent from "./components/other/AppContent";

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
