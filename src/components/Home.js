import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="intro">
        <img
          id="intro-img"
          src="https://www.amd.com/system/files/styles/992px/private/2022-05/1413018-am5-ryzen-1260x709.jpg?itok=A6N2btzr"
          alt="AMD CPU"
        />
        <div id="intro-card">
          <div id="card-container">
            <h1>The most advanced PC processor for gamers and creators</h1>
            <p className="subtitle">Change How You Game</p>
            <button className="btn-orange">
              <Link to="/all">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>

      <div id="lineup">
        <h1>Meet the AMD Processors line-up</h1>
        <p className="subtitle centered-text">
          When your PC has the world’s most advanced desktop processor for
          gamers, you can focus on what really matters: being victorious on the
          digital battlefield. Whether you’re playing the latest titles or
          revisiting a classic, the AMD Ryzen™ 7000 Series processors are a
          gaming powerhouse with high-performance “Zen 4” cores. With up to 16
          cores, 32 threads, boost clocks of up to 5.7GHz2 and up to 80MB of
          cache, AMD Ryzen 7000 Series processors deliver game changing
          performance.
        </p>
        <div className="lineup-list">
          <Link to="/ryzen-five">
            <div className="lineup-item">
              <img
                className="lineup-img"
                src="https://drive.google.com/uc?export=view&id=1AUNChhHdhErUUYwgpeIZk06z5QjiyQEJ"
                alt="AMD Ryzen Five"
              />
              <h3>Ryzen™ 5 7600X</h3>
              <button className="btn-white">Buy Now</button>
            </div>
          </Link>
          <Link to="/ryzen-seven">
            <div className="lineup-item">
              <img
                className="lineup-img"
                src="https://drive.google.com/uc?export=view&id=1K4NLlSp_OePuZ1nmwVEXtKT4Utj6p4M8"
                alt="AMD Ryzen Seven"
              />
              <h3>Ryzen™ 7 7700X</h3>
              <button className="btn-white">Buy Now</button>
            </div>
          </Link>
          <Link to="/ryzen-nine">
            <div className="lineup-item">
              <img
                className="lineup-img"
                src="https://drive.google.com/uc?export=view&id=1dfHohnHKteFd_poqZLK6IB6-ozSfIGnn"
                alt="AMD Ryzen Nine"
              />
              <h3>Ryzen™ 9 7900X</h3>
              <button className="btn-white">Buy Now</button>
            </div>
          </Link>
        </div>
      </div>

      <div id="qualities-container">
        <h1>The best part of your day just got better.</h1>
        <div id="qualities">
          <div className="quality">
            <img
              alt="AMD"
              src="https://drive.google.com/uc?export=view&id=1dfHohnHKteFd_poqZLK6IB6-ozSfIGnn"
            />
            <h2>Change How You Game</h2>
            <p className="centered-text">
              When your PC has the world’s most advanced desktop processor for
              gamers, you can focus on what really matters: being victorious on
              the digital battlefield. Whether you’re playing the latest titles
              or revisiting a classic, the AMD Ryzen™ 7000 Series processors are
              a gaming powerhouse with high-performance “Zen 4” cores. With up
              to 16 cores, 32 threads, boost clocks of up to 5.7GHz2 and up to
              80MB of cache, AMD Ryzen 7000 Series processors deliver game
              changing performance.
            </p>
          </div>
          <div className="quality">
            <img
              src="https://www.amd.com/system/files/styles/992px/private/2022-08/1536834-future-cityscape-rendering-1260x709.jpg?itok=EUVSJXkJ"
              alt="AMD"
            />
            <h2>The Latest Technologies</h2>
            <p className="centered-text">
              Whether you are 3D rendering a high poly scene, exporting massive
              video files, or visualizing an architectural dream, AMD Ryzen™
              7000 Series processors are built to beat the clock. With
              time-saving connectivity like PCIe® 5.0 storage support,
              ultra-fast WiFi® 6E, AMD EXPO™ technology, up to 32 processing
              threads, and dedicated video accelerators3, elevate your
              experience with AMD Ryzen 7000 Series processors.
            </p>
          </div>
          <div className="quality">
            <img
              src="https://www.amd.com/system/files/styles/992px/private/2022-05/1413018-am5-ryzen-1260x709.jpg?itok=A6N2btzr"
              alt="AMD"
            />
            <h2>The Future Of Ryzen™ Processors</h2>
            <p className="centered-text">
              The all-new AMD Ryzen 7000 Series processors are packed with
              state-of-the-art technologies for an effortlessly modern PC.
              Highlights include high-speed DDR5 memory, PCIe® 5.0 support, AMD
              EXPO™ one-touch memory overclocking, and hyper-efficient 5nm
              manufacturing. Put an AMD Socket AM5 motherboard at the heart of
              your rig to dominate the games you love today and tomorrow. If
              your PC needs the latest and greatest capabilities, insist on AMD
              Ryzen™ processors.
            </p>
          </div>
        </div>
      </div>

      <div id="comparison-container">
        <div id="comparsion-card">
          <h5 className="mini-subtitle">THE RIGHT PROCESSOR FOR YOU</h5>
          <h3>Compare AMD processors.</h3>
          <p>
            Not sure which processor is best for you? we can help you decide and
            choose whether for gaming, streaming or content creation
          </p>
          <button className="btn-orange">
            <Link to="/all">Compare Processors</Link>
          </button>
        </div>
        <div id="comparison-img">
          <img
            src="https://i.pinimg.com/originals/80/8a/dd/808add313799cff1f67ab7e0f9f11905.jpg"
            alt="ratio models"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
