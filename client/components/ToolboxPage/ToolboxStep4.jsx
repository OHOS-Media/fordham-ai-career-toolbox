export default function ToolboxStep4({ bulletPoints }) {
  console.log(bulletPoints);
  return (
    <div>
      <h4 className="h4">Get Bullet Points</h4>

      <div>
        {bulletPoints.map((job, jobIndex) =>
          Object.entries(job).map(([jobTitle, bulletPoint]) => (
            <div key={jobIndex}>
              <h3>{jobTitle}</h3>
              <ul>
                {bulletPoint.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
