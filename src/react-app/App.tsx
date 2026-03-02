import "./index.css";

function App() {
  return (
    <>
      <div className="accent-bar"></div>

      {/* NAV */}
      <nav>
        <a href="#" className="logo">
          Hayyat <i>&#1581;&#1610;&#1617;&#1575;&#1577;</i>
        </a>
        <div className="nav-r">
          <a href="#conditions">Conditions</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#care">Your Care</a>
          <a href="#stories">Stories</a>
          <a href="#join" className="pill pill-primary">
            Join the Waitlist
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-orb hero-orb-a"></div>
        <div className="hero-orb hero-orb-b"></div>
        <div className="container">
          <div>
            <h1>
              Your health companion
              <br />
              that finally speaks <em>your language.</em>
            </h1>
            <p className="hero-p">
              Hayyat helps you understand your body, screen for PCOS &amp;
              Endometriosis, and walk into your doctor's office prepared — all in
              Gulf Arabic, on your phone.
            </p>
            <p className="hero-ar">
              حيّاة — لأنك تستاهلين أحد يسمعك
            </p>
            <div className="hero-actions">
              <a
                href="#join"
                className="pill pill-primary"
                style={{ padding: "0.65rem 1.8rem", fontSize: "0.88rem" }}
              >
                Join the Waitlist &rarr;
              </a>
              <a
                href="#how-it-works"
                className="pill"
                style={{
                  border: "1.5px solid rgba(109,46,70,0.2)",
                  color: "var(--wine)",
                  padding: "0.65rem 1.8rem",
                  fontSize: "0.88rem",
                }}
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="phone-wrap">
            <div className="phone">
              <div className="screen">
                <div className="screen-hdr">
                  <b>Hayyat</b>
                  <small>حيّاة</small>
                </div>
                {/* AI bubble in Arabic */}
                <div className="bub bub-ai">
                  هلا 💛 قوليلي كيف حالك هالفترة؟ صوت أو كتابة — عادي، كلميني
                  بالعربي.
                </div>
                {/* User bubble in Arabic */}
                <div className="bub bub-user">
                  والله من زمان عندي ألم وقت الدورة بس أمي قالت عادي
                </div>
                {/* AI bubble in Arabic */}
                <div className="bub bub-ai">
                  الألم اللي يوقف يومك مو شي لازم تتقبلينه. قوليلي أكثر؟
                  <div className="chip">⚠️ تم رصد تطبيع الألم</div>
                </div>
                {/* User bubble in Arabic */}
                <div className="bub bub-user">
                  وبشرتي صارت حبوب كثير وشعري يطيح
                </div>
                {/* AI bubble in Arabic */}
                <div className="bub bub-ai">
                  سجّلت تغيرات البشرة وتساقط الشعر — خلينا نتأكد إن دكتورك
                  يشوف الصورة كاملة.
                  <div className="chip">✓ تم تسجيل ٥ أعراض</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNDERSTAND */}
      <section className="understand">
        <div className="container">
          <div className="understand-ar">
            "كل البنات كذا... عادي"
          </div>
          <div className="understand-en">
            "All girls are like this... it's normal."
          </div>
          <p>
            You've heard this from your mother, your aunt, maybe even your
            doctor. You bought painkillers every month. You thought the fatigue
            was just stress. What if someone told you it isn't normal — and
            helped you find out why?
          </p>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="conditions" id="conditions">
        <div className="container">
          <div className="cond-grid">
            <div>
              <div className="sec-label" style={{ color: "var(--rose)" }}>
                WE CAN HELP
              </div>
              <div
                className="sec-title"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                Struggling with symptoms
                <br />
                no one takes seriously?
              </div>
              <p
                style={{
                  color: "var(--rose)",
                  fontSize: "0.95rem",
                  maxWidth: 420,
                }}
              >
                You're not imagining it. Hayyat screens for the conditions
                behind your symptoms — conditions that take years to diagnose in
                the Gulf.
              </p>
              <div className="cond-tags">
                <span className="tag tag-active">PCOS</span>
                <span className="tag tag-active">Endometriosis</span>
                <span className="tag">Painful Periods</span>
                <span className="tag">Heavy Bleeding</span>
                <span className="tag">Irregular Cycles</span>
                <span className="tag">Hormonal Acne</span>
                <span className="tag">Excess Hair Growth</span>
                <span className="tag">Chronic Fatigue</span>
                <span className="tag">Pelvic Pain</span>
                <span className="tag">Weight Changes</span>
                <span className="tag">Hair Loss</span>
                <span className="tag">Mood Swings</span>
                <span className="tag">Bloating</span>
                <span className="tag">Fertility Concerns</span>
              </div>
              <div className="bothered">
                <p>
                  Not sure what's wrong, but you know <em>something</em> is?
                  <br />
                  <strong>That's exactly who Hayyat is for.</strong>
                </p>
              </div>
            </div>
            <div className="cond-right">
              <div className="scard">
                <div className="num">1 in 5</div>
                <div className="txt">
                  Gulf women affected by PCOS — the highest rate in the world
                </div>
              </div>
              <div className="scard">
                <div className="num">73%</div>
                <div className="txt">
                  of women were told their pain is "just cramps" by family or a
                  doctor
                </div>
              </div>
              <div className="scard scard-lg">
                <div className="num">11+ years</div>
                <div className="txt">
                  the average time it takes to get an endometriosis diagnosis in
                  the Arab world
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how-it-works">
        <div className="container">
          <div className="sec-label" style={{ color: "var(--gold)" }}>
            HOW IT WORKS
          </div>
          <div
            className="sec-title"
            style={{
              color: "var(--white)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            }}
          >
            Three steps. One conversation.
            <br />
            In your Arabic.
          </div>
          <div className="how-steps">
            <div className="how-step">
              <div className="step-circle">1</div>
              <h3>Talk to Hayyat</h3>
              <div className="ar">تكلّمي بالعربي</div>
              <p>
                Open the app and just talk — voice or text, in Gulf Arabic. No
                forms. No English. No awkward clinic questions. Hayyat
                understands your dialect and gently guides the conversation.
              </p>
            </div>
            <div className="how-step">
              <div className="step-circle">2</div>
              <h3>Get Your Report</h3>
              <div className="ar">تقرير طبي لك ولدكتورك</div>
              <p>
                Hayyat uses published medical criteria — the same ones doctors
                use — to create a clear summary of your symptoms and risk level.
                One report for you in Arabic, one for your doctor in Arabic and
                English.
              </p>
            </div>
            <div className="how-step">
              <div className="step-circle">3</div>
              <h3>Walk In Prepared</h3>
              <div className="ar">ادخلي العيادة وأنتِ جاهزة</div>
              <p>
                Show your doctor a 2-page brief with everything they need. No
                more forgetting symptoms. No more being dismissed. After your
                visit, Hayyat helps you understand what the doctor said — in
                plain Arabic.
              </p>
            </div>
          </div>
          <div className="how-note">
            No downloads from the app store. Just open it on your phone.
          </div>
        </div>
      </section>

      {/* YOUR CARE */}
      <section className="care" id="care">
        <div className="container">
          <div className="sec-label" style={{ color: "var(--rose)" }}>
            YOUR CARE COMPANION
          </div>
          <div
            className="sec-title"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
          >
            We stay with you — before,
            <br />
            during, and after the doctor.
          </div>
          <p
            style={{
              color: "var(--rose)",
              fontSize: "0.92rem",
              maxWidth: 500,
              marginBottom: "2rem",
            }}
          >
            Most health apps stop at tracking. Hayyat walks with you through the
            whole journey.
          </p>
          <div className="care-grid">
            <div className="ccard">
              <div className="ic">📋</div>
              <h4>Pre-Visit Brief</h4>
              <p>
                Your doctor gets a clear summary of your symptoms and history —
                so you don't have to repeat yourself or forget anything.
              </p>
            </div>
            <div className="ccard">
              <div className="ic">💬</div>
              <h4>Doctor Translator</h4>
              <p>
                The doctor said "hyperandrogenism." Hayyat tells you: your body
                is making too many male hormones, and that's what's causing your
                symptoms.
              </p>
            </div>
            <div className="ccard">
              <div className="ic">💊</div>
              <h4>Medication Guide</h4>
              <p>
                What each pill does, when to take it, what to expect.
                Ramadan-adjusted timing. A daily WhatsApp check-in: did you take
                it today?
              </p>
            </div>
            <div className="ccard">
              <div className="ic">🛟</div>
              <h4>If You Stop, We Ask Why</h4>
              <p>
                Stopped your meds? We don't just remind — we ask: nausea? cost?
                Ramadan fasting? Each answer gets a real solution, not another
                ping.
              </p>
            </div>
            <div className="ccard">
              <div className="ic">👨‍👩‍👧</div>
              <h4>Family Messages</h4>
              <p>
                Need help explaining your condition to your family? Hayyat
                creates WhatsApp-ready messages — clear, simple, zero stigma.
              </p>
            </div>
            <div className="ccard">
              <div className="ic">📅</div>
              <h4>Missed Appointment?</h4>
              <p>
                Life happens. We check in gently, figure out what got in the
                way, and help you reschedule when you're ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR YOU */}
      <section className="built">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="sec-label" style={{ color: "var(--gold)" }}>
            BUILT FOR YOU
          </div>
          <div
            className="sec-title"
            style={{
              color: "var(--white)",
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
            }}
          >
            For Gulf women. In Gulf Arabic.
            <br />
            Because your health experience should feel like home.
          </div>
          <div className="built-grid" style={{ textAlign: "left" }}>
            <div className="bcard">
              <h4>🗣️ Your Real Arabic</h4>
              <p>
                Not formal Arabic. Not English-first. Hayyat speaks Gulf Arabic
                — Khaleeji, Najdi, Hejazi — the way you talk at home with your
                sisters.
              </p>
            </div>
            <div className="bcard">
              <h4>🌙 Ramadan Aware</h4>
              <p>
                Medication timing moves to Suhoor and Iftar. Symptoms are read
                in the context of fasting. Your health doesn't pause — and
                neither do we.
              </p>
            </div>
            <div className="bcard">
              <h4>🔒 Private. Always.</h4>
              <p>
                Photos deleted after processing. Voice deleted after
                transcription. Data stays in the Gulf, encrypted. You can erase
                everything in one tap. We'll never share your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="stories" id="stories">
        <div className="container">
          <div className="sec-label" style={{ color: "var(--rose)" }}>
            WOMEN LIKE YOU
          </div>
          <div
            className="sec-title"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
          >
            Don't just take our word for it.
          </div>
          <p
            style={{
              color: "var(--rose)",
              fontSize: "0.9rem",
              marginBottom: "2rem",
            }}
          >
            Stories from the women who inspired Hayyat.
          </p>
          <div className="stories-grid">
            <div className="story">
              <q>
                I spent 8 years thinking my pain was normal because my mother
                had the same pain. If someone had asked me the right questions —
                in Arabic — I would have known years earlier.
              </q>
              <div className="who">Noura, 29</div>
              <div className="where">Doha, Qatar</div>
            </div>
            <div className="story">
              <q>
                My patients visit 5 doctors before someone connects their
                symptoms. A pre-visit brief that shows the full picture? That
                would change everything for my clinic.
              </q>
              <div className="who">Dr. Fatima</div>
              <div className="where">OB/GYN, Hamad Medical</div>
            </div>
            <div className="story">
              <q>
                I stopped my medication because of the nausea but was too
                embarrassed to tell my doctor. If something had asked me why and
                given me a solution, I would have kept going.
              </q>
              <div className="who">Sara, 34</div>
              <div className="where">Riyadh, Saudi Arabia</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="trusted">
        <div className="container">
          <p>Backed by Research &amp; Accelerators</p>
          <div className="trust-row">
            <span className="trust-item">QSTP Qatar</span>
            <span className="trust-item">Merck FemTech</span>
            <span className="trust-item">Rotterdam Criteria</span>
            <span className="trust-item">Chapron Scoring</span>
            <span className="trust-item">886-Patient Dataset</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="join">
        <div className="container">
          <div className="cta-phones">
            <div className="cta-ph">
              <div className="cta-ph-in">
                <span>Talk</span>
                <small>تكلّمي</small>
              </div>
            </div>
            <div className="cta-ph">
              <div className="cta-ph-in">
                <span>Learn</span>
                <small>افهمي</small>
              </div>
            </div>
            <div className="cta-ph">
              <div className="cta-ph-in">
                <span>Heal</span>
                <small>تعافي</small>
              </div>
            </div>
          </div>
          <div className="sec-title">Ready to be heard?</div>
          <p
            style={{
              fontFamily: "'Noto Kufi Arabic', sans-serif",
              direction: "rtl",
              fontSize: "1.15rem",
              color: "var(--gold)",
              fontWeight: 600,
              marginBottom: "0.4rem",
            }}
          >
            حيّاة تسمعك
          </p>
          <p
            style={{
              color: "var(--rose)",
              fontSize: "0.95rem",
              marginBottom: "1.8rem",
            }}
          >
            We're launching our first pilot in Qatar. Join the waitlist to be
            among the first.
          </p>
          <a
            href="mailto:info@hayyat.ai?subject=Hayyat%20Waitlist&body=I'd%20like%20to%20join%20the%20Hayyat%20waitlist."
            className="pill pill-primary"
            style={{ fontSize: "0.95rem", padding: "0.75rem 2.2rem" }}
          >
            Join the Waitlist &rarr;
          </a>
          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--warm-gray)",
              marginTop: "1rem",
            }}
          >
            Free. No credit card. We'll reach out when it's your turn.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-l">
            &copy; 2026 Hayyat AI &middot; Founded by Hayyat Team &middot;{" "}
            <a href="mailto:info@hayyat.ai">Contact</a>
          </div>
          <div className="footer-r">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a
              href="https://linkedin.com/in/adham-mehdawi-02a9a64a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
