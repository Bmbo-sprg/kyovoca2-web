import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App.tsx';

const AppRouted = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/download" element={
          <div>
            <h1>Download</h1>
            <a href="https://103.gigafile.nu/0120-bec690048c26dca0261d422579d15c917">このリンク</a>
            からDLキーを入力してダウンロードしてください。<br />
            DLキーはお買い上げのCDに記載されています。
            DLキーは他の人に教えないでください。<br />
            ダウンロード期限は2025年1月20日(月)となっております。
            過ぎてしまった場合は、<a href="https://x.com/aotakeuma">Twitter</a>までご連絡ください。<br /><br />
            <Link to="/">京大ボカロコンピ2 特設サイト</Link>
          </div>
        } />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouted />
  </StrictMode>
);
