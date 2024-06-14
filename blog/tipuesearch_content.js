var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 w5 課程","text":"以 iframe 嵌入先前的教學影片, 並摘要各影片內容 教學 1.wcm2024_1a_1_如何建立個人的課程網站 2.wcm2024_1a_如何利用 Replit 修改網站標題 3.wcm2024_1a_如何利用 codespaces 維護網站內容 4.wcm2024_1a_w3_1_利用 codespace 維護分組網站 5.wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組 6.wcm2024_1a_w3_3_如何在 replit 自設 .ssh 維護分組倉儲 7.wcm2024_1a_w4_複習有關網站與 cmsimde 相關內容 8.wcm2024_1a_w4_說明如何在 Replit Codespaces 與 Gitpod 執行倉儲的動態與靜態網站 9.wcm2024 1a w5 Replit 平台上的分組倉儲權限設定 10.wcm2024 1a w5 Putty Solvespace STL 零件檢視方法 Questions for CMSiMDE 動態與靜態系統能不能參照相同的 static, downloads 與 images 路徑 動態與靜態系統能不能使用 Template, 讓頁面顯示更有彈性 系統能否成為其他系統的模組, 或發展出 API 架構 對於圖片與 STL 引用, 能否強化其即時互動性 在自架主機上能否直接與 CoppeliaSim 或 Webots 的模擬場景互動 與 Web-based Solvespace 進行整合 將 Range3 作為後端 FEM 運算模組 納入 Pyslvs-UI 的演算模組架構","tags":"w5","url":"./2024-Spring-w5-blog-tutorial.html"},{"title":"2024 w6 課程","text":"如何透過與 ChatGPT 的對話, 了解有關 git 在不同專業領域的應用方法. Git 歷史與希望解決的問題 Git 是一個分散式的版本控制系統，由 Linus Torvalds 於 2005 年創建。 2005年：Linus Torvalds開始開發Git。 2005年4月：Git的第一個版本（1.0）發布。 2005 年至今：Git 的成長，吸引了全球開發者社群的關注與貢獻。 2008年：GitHub成立，為Git提供了一個受歡迎的主機服務平台，讓開發者可以輕鬆分享和協作。 2016年：微軟收購了GitHub，這項舉動在開源社群引起了一些爭議，但也為Git的發展提供了更多的資源和支援。 2020 年：GitHub 宣布啟動程式碼移動計劃，計劃將所有專案的主要程式碼儲存庫轉移到遠端儲存庫。 總的來說，Git 的發展歷史是一個開放和協作的過程，得益於全球開發者社群的不懈努力和貢獻。工具。 git 創作者的相關履歷 Git 的創造者是 Linux 核心的創建者 Linus Torvalds。 Linus Torvalds 出生於 1969 年 12 月 28 日，從赫爾辛基大學畢業，主修電腦科學。 在他的職業生涯中，Torvalds 曾就職於 Transmeta Corporation 和開源開發實驗室。 Torvalds 以開放、直率和自由的風格而聞名，他在 Linux 核心和 Git 專案的過程中始終堅持維護這一風格。 請問git如何在Master CAM應用 Git在機械設計專業中的應用通常不是直接與Master CAM（一種用於電腦輔助製造的軟體）集成，而是在開發流程中用於版本控制和協作。的情況： 版本控制：機械設計過程中會產生大量的CAD（電腦輔助設計）檔案、製造程式等。使得團隊成員可以同步工作，而不必擔心文件的覆蓋或遺失。 協作：Git 可以使團隊成員能夠同時進行機械設計專案的協作 他們可以在本地工作，然後透過 Git 將他們的主動更改到共享的遠端儲存庫中。在同一個頁面上工作。 分支管理：Git 的分支功能使得可以輕鬆地建立新的功能分支或修復分支，而不影響主要的開發分支。 程式碼審查：即使在機械設計中，程式碼審查也是一個步驟。 總的來說，雖然 Git 不是直接與 Master CAM 整合的工具，但它可以作為機械設計專業中的一個強大的版本控制和協作工具，幫助團隊更有效地進行工作。 2.假設要在Windows實際示範git客戶端與git伺服器，如何進行？ 安裝Git客戶端： 首先，你需要在 Windows 上安裝 Git 用戶端。 設定Git客戶端： 安裝完成後，開啟Git Bash或Git命令提示字符，設定使用者名稱和電子郵件地址 設定Git伺服器： 如果你想在本機上搭建一個 Git 伺服器，你可以使用 Git 內建的git daemon工具。 建立本機儲存庫： 使用 Git 用戶端，在您的本機系統中建立一個新的 Git 儲存庫。目錄，然後執行 連接到Git伺服器： 在本機儲存庫中，新增終端伺服器的連結git://localhost/yourrepo.git。 股東和拉取變更： 現在您已經設定了本地儲存庫和外部伺服器器的鏈接，您可以使用 Git 客戶端來啟動您的變更到伺服器器，或從伺服器器拉取別人的變更。 透過這些步驟，你可以在 Windows 上示範如何設定 Git 用戶端和伺服器，以及如何在它們之間進行通訊。 從 git init 到 git push 啟動近端可攜程式系統 更換目錄至 y:\\tmp 分別建立 gitproject\\repository 與 gitserver\\repository 目錄 利用以下指令, 設定之後的 git init 將採用 main 作為內定主分支 在 Y:\\tmp\\gitproject> git config --global init.defaultBranch main 進入 gitproject\\repository 目錄, 新增一個目錄名稱為 repo1, 進入 repo1 後執行 git init 進入 gitserver\\repository 目錄, 新增一個目錄名稱為 repo1, 進入 repo1 後執行 git init --bare 之後在 Y:\\tmp\\gitproject\\repo1 目錄操作, 建立新檔案 README.md: echo \"Hello, World!\" > README.md git add README.md git commit -m \"Initial commit\" git remote add origin y:\\tmp\\gitserver\\repository\\repo1 git push -u origin main 如此, 就可以將 Y:\\tmp\\gitproject\\repo1 中的倉儲內容送到 Y:\\tmp\\gitserver\\repository\\repo1 目錄中. 之後請在 C:\\tmp\\repository> 執行 git clone Y:\\tmp\\gitserver\\repository\\repo1, 由於沒有特別指令倉儲 clone 後的目錄名稱, 因此 git 會將 Y:\\tmp\\gitserver\\repository\\repo1 倉儲內容複製一份放入 C:\\tmp\\repository\\repo1 目錄中. 表示目前 Y:\\tmp\\gitserver\\repository\\repo1 伺服器中的 repo1, 已經分別存入 Y:\\tmp\\gitproject\\repo1 與 C:\\tmp\\repository\\repo1 目錄中, 使用者可以分別在這兩個倉儲中進行改版後, 在各自的倉儲資料中進行提交, 隨後再設法將改版內容 push 到 Y:\\tmp\\gitserver\\repository\\repo1 中進行合併. 最後, 若要讓使用者跨網路存取 Windows 操作系統上的倉儲, 可以根據這裡的說明, 啟動伺服器: git daemon --reuseaddr --base-path=. --export-all --verbose 然後利用 C:\\tmp\\repository>git clone git://localhost/repo1 repo002 取下倉儲內容, 其中的 localhost 可以使用外部 IP 或對應的網路符號名稱. 若要在 Windows 環境打造一個類似 Github 的網際環境, 可以採用 https://github.com/gogs/gogs, 其中包括網際資料庫 PostgreSQL 伺服器或 SQLite 的應用.","tags":"w6","url":"./2024-Spring-w6-blog-tutorial.html"},{"title":"2024 w4 課程","text":"介紹 git 與 cmsimde 的相關用法 有關建立網站 網際內容管理的網際指的並非網際網路的 Internet, 而是指 Web-based, 也就是針對網頁瀏覽器檢視的內容加以管理, 而這些內容除了具備各種不同格式的文字外, 還包括靜態圖片與動態的影音多媒體. Replit 靜態網站檢視 下載 main2.txt 與 static.txt, 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. Replit 建立分組倉儲權限 由於 Replit 上的免費帳號僅允許與一個 Github 帳號對應, 因此若將分組網站 import 到 Replit, 必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config (id_rsa.pub 必須登錄到 Github 對應帳號) 而 Host 的設定與 Windows putty 中的 session 名稱相同, 配合使用的 ssh 連線指令將會是: git clone --recurse-submodules git@github.com:mdewcm2024/分組倉儲名稱.git 當使用者完成 /home/runner/.ssh 目錄中的 id_rsa 與 config 建立後, Replit 會定期刪除免費用戶的 .ssh 目錄, 因此使用者必須將此兩個檔案存至隨身碟, 並在需要對分組倉儲改版時, 啟動分組倉儲的動態網站, 將隨身碟中的 id_rsa 與 config 檔案, upload 到分組倉儲的 downloads 目錄後, 再利用 ssh.py 的執行, 將 id_rsa 與 config 移動到 /home/runner/.ssh 目錄中. 也就是執行: python3 ssh.py","tags":"w4","url":"./2024-Spring-w4-blog-tutorial.html"},{"title":"2024 w3 課程","text":"Replit, Github Codespaces, Gitpod 之外, 還介紹如何利用可攜系統維護個人與分組網站. 利用 Github Classroom 分組 1.四技期中分組作業名稱為 1a 2.各組組長在取得作業連結 3.自行建立各組 Team 4.每組6名組員 5.透過作業連結加入 ag1 Team 6.其餘各組組員則依序建立 ag2, ag3 等 Team 名稱, 讓該組組員可以加入. 7.完成 ag1 Team 建立 9.將取得 mdewcm2024 帳號下的 1a-ag1 倉儲 10.可以使用登入 Github 的帳號權限進行改版. git 指令 git 的新增、提交與推送指令: git add . git commit -m \"說明字串\" git push 使用 git add . 表示要認列所進行的全部改版內容, git commit -m 執行之前, 若在近端使用, 必須先行設定 git config, 將 home_ipv6 目錄下的 .gitconfig 中明確列出改版者的身分, 其中包括: git config --global user.name \"提交者的 github 帳號名稱\" git config --global user.email \"提交者在 github 所登錄的 email address\" 使用者也可以利用 git version 查詢目前所使用的 git 版本. git status 通常用來查核目前近端的改版狀況, 例如: 是否與遠端倉儲同步, 或者遠端倉儲已經有了新版本. 若遠端倉儲已經有新的版本, 則在 git push 之前, 必須設法取下遠端資料進行合併後, 才能再提交新的版本並推送到遠端. git pull = git fetch + git merge 由於要將各組員的 wcm2024 設定為各分組倉儲的子模組, 因此必須利用 git submodule add 以各組員的學號作為子目錄名稱, 利用下列指令, 將組員倉儲新增為分組倉儲的子模組: git submodule add 倉儲網址 子目錄 若只要取下倉儲的主要內容, 可以使用下列指令: git clone 倉儲網址_協定.git 指定目錄與否 若要取下帶有子模組的倉儲, 且可能該子模組還有設定其他子模組, 則必須要加上 --recurse-submodules: git log (檢視 Git 紀錄 Q鍵離開) ls -l (瀏覽) pwd (列出現在工作目錄) acp (\"輸入\" 直接上傳) dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) ./b(代表執行、運行)(執行可執行檔) 利用 Wink 建立操作影片 Wink 官方網站: https://www.debugmode.com/wink.html Wink 錄製 mp4 操作影片, 可以與 Sharex 共用 ffmpeg.exe. Sharex 可用於電腦畫面截圖, 也可以錄製電腦連續操作影片, 而 Wink 則可取電腦操作過程的關鍵影格, 加上文字說明標籤後, 製作操作流程示範影片. 下載 wink3.7z (需要密碼)","tags":"w3","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"2024 w2 課程","text":"確認各學員是否完成 Github 中個人倉儲與網站的建立, 並且除了 Replit 還導入利用 Github Codespaces 維護個人與分組網站. 確認所有學員都已經建立個人網站 建立個人課程網站步驟: 1.登入 Github 2.連結到 https://github.com/mdecycu/cmsimde_site 3.利用 \"Use this template\" 下方的 \"Create a new repository\" 建立名稱為 wcm2024 的倉儲 4.在 wcm2024 倉儲上方的 Settings 設定頁面中, 左方 Pages 中的 Branch 分支區域, 選擇將 main 分支存為網頁的 root 根目錄 等 wcm2024 的倉儲 Github Pages 轉檔完成後, 可以看到 commits 提交區的綠色勾勾, 就完成網址為 https://帳號.github.io/wcm2024 的個人課程網站 利用上述步驟完成的倉儲內容, 同時帶有以 Python 編寫的動態網站程式, 以及位於 content 目錄中的靜態網頁資料. 如何利用Codespaces 維護網站 採用 Github Codespaces 維護網站的好處是，Visual Studio code 介面提供多終端機和多埠開啟功能可使用 init_replit 指令安裝 Python 模組 chmod u+x init_replit ./init_replit 隨後輸入(這是動態網站) python3 main.py 重新開啟新的機器終端 python3 -m http.server 這是靜態網站 即可編輯網站 利用 Github Classroom 建立分組網站 在 mdewcm2024 帳號下, 期中分組作業名稱為 1a, 若第一組組長建立 Team 名稱為 midag1, 則分組倉儲名稱將為 1a-midag1, 需要如此命名作業與分組倉儲名稱的原因是, 在 Github Classroom 同一個 organization 名稱下 (即 wcm2024), 各班作業名稱必須有所區別, 而且各分組 Team 名稱也不能相同.","tags":"w2","url":"./2024-Spring-w2-blog-tutorial.html"},{"title":"2024 w1 課程","text":"網際內容管理與協同產品設計實習課程教學導引. 登入 MS Online 登入 MS Online, 為了能在 MS Teams 中上課, MS 團隊代碼: ry8vdyo Github 帳號 建立 Github 帳號, 主要用來建立並維護個人的課程倉儲與網站. 建立個人課程網站 網際內容管理的個人課程網站名稱為 wcm2024, 請先登入 Github 後, 連接至 https://github.com/mdecycu/cmsimde_site, 以此倉儲作為 Template 建立個人的 wcm2024 倉儲, 並將倉儲主分支設定 Github Pages 後, 檢查是否已經可以連線到個人的課程網頁.","tags":"w1","url":"./2024-Spring-w1.-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};