export default function FeedbackCompany() {
  return (
    <div className="card w-full lg:min-w-[500px] bg-base-100 shadow-xl m-5">
      <div className="card-body">
        <h2 className="card-title">Retour des clients</h2>

        <div className="stats stats-vertical shadow">
          <div className="stat">
            <div className="stat-title">
            <div className="lg:tooltip lg:tooltip-right" data-tip="Evaluation globale (A+: excellent)">
                <button className="btn">Label</button>
              </div>
            </div>
            <div className="stat-value">A</div>
          </div>

          <div className="stat">
            <div className="stat-title">
            <div className="lg:tooltip" data-tip="vos clients contactés">
                <button className="btn">
                Nombre de clients
                </button>
                </div>
                </div>
            <div className="stat-value">1000</div>
          </div>

          <div className="stat">
            <div className="stat-title">
            <div className="lg:tooltip" data-tip="vos clients contactés">
                <button className="btn">
                Qualité produits
                </button>
                </div>
                </div>
            <div className="stat-value">3/5</div>
          </div>

          <div className="stat">
            <div className="stat-title">
            <div className="lg:tooltip" data-tip="note des clients">
                <button className="btn">
                Qualité service
                </button>
                </div>
                </div>
            <div className="stat-value">4/5</div>
          </div>

          <div className="stat">
            <div className="stat-title">
              <div className="lg:tooltip" data-tip="Investissement social">
                <button className="btn">Interraction avec la communauté</button>
              </div>
            </div>
            <div className="stat-value">3/5</div>
          </div>
        </div>
      </div>
    </div>
  );
}
