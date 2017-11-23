
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
wohnungssuche: {
        title: 'Wohnungssuche',
        topic: 'wohnungssuche',
        topicId: 1,
        meta: {},
        subtopics: [
          {
            subtopicTitle: 'Auskünfte',
            questions: [
              {
                mainQuestion: 'Welche Auskünfte darf ein Vermieter verlangen?',
                topicId: 11,
                yesNo: false,
                answers: [
                  `<p>Ein Vermieter darf Informationen verlangen, welche relevant für die Überprüfung von Bewerbern sind. Insbesondere folgende Informationen gelten als relevant:<p>
                    <ul>
                      <li>Name und Adresse</li>
                      <li>Geburtsdatum</li>
                      <li>Nationalität und Aufenthaltsbewilligung</li>
                      <li>Anzahl Personen und Haustiere, welche in der Wohnung/Haus leben werden (inklusive Untermieter)</li>
                      <li>Beruf, Einkommen und Name des Arbeitgebers</li>
                      <li>Betreibungen und Verlustscheine</li>
                      <li>Zu erwartender Lärm (z.B. ein Musikinstrument)</li>
                      <li>Anzahl Autos</li>
                      <li>Ob man die Wohnung wechselt weil der bisherige Vermieter gekündigt hat und warum man die Kündigung erhalten hat</li>
                      <li>Alle Information, welche kantonale Behörden verlangen (z.B. Zivilstand, Religion, Heimatort…)</li>
                      <li>Referenzen dürfen nur nach Einwilligung des Mieters eingeholt werden und nur zur Überprüfung Ihrer Angaben in der Bewerbung dienen. Ausserdem darf der Vermieter keine Angaben einholen, wenn er Ihnen nicht ernsthaft die Wohnung geben will.</li>
                      <li>Für detailliertere und zusätzliche Auskünfte braucht der Vermieter ebenfalls Ihre Zustimmung und der Vermieter darf diese nur verlangen, wenn es einen speziellen Grund gibt.<li>
                    </ul>
                  <p>Folgende Auskünfte darf ein Vermieter nicht verlangen:</p>
                    <ul>
                      <li>Strafregisterauszug</li>
                      <li>Wie vermögend man ist (z.B. Fragen zu Ihrem Vermögen oder ob Sie jemandem Geld schulden, z.B. ob das Auto geleast ist)</li>
                      <li>Informationen zur letzten Wohnung (z.B. wieviel man bezahlt hat oder der Name Ihrer vorherigen Verwaltung wenn Sie diese nicht als Referenz angegeben haben)</li>
                      <li>Ob man an einer Krankheit leidet (Ausnahme: Wenn es sich um eine Spezialwohnung für Leute mit gesundheitlichen Problemen handelt)</li>
                      <li>Ob man sich in einer Notlage befindet (z.B. weil es sehr schwierig ist eine Wohnung zu finden oder persönliche Probleme)</li>
                      <li>Ob man Mitglied im Mieterverband oder einer politischen Organisation ist</li>
                      <li>Ob man ein Interesse daran hat noch weitere Verträge abzuschliessen (z.B. eine Versicherung oder ob man etwas kaufen möchte)</li>
                      <li>Ob man die Miete für zu hoch oder zu tief hält</li>
                    </ul>
                  <p>Falls der Vermieter Sie etwas gefragt hat, was er/sie nicht durfte und Sie haben falsche Angaben gemacht haben, dann kann Ihnen dies nicht vorgeworfen werden.</p>`,
                ],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Welche Auskünfte muss Ihnen ein Vermieter geben?',
                topicId: 12,
                yesNo: false,
                answers: [`<p>Der Vermieter muss über alles Wichtige zur Wohnung Auskunft geben, was Sie sonst nicht erfahren könnten. Das sind insbesondere die Nebenkosten sowie Schäden und Probleme mit der Wohnung, welche nicht sichtbar sind. Aber auch zukünftige Pläne wie z.B. Bauarbeiten oder Erhöhungen des Mietzinses müssen Ihnen mitgeteilt werden.</p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Darf der Vermieter meine Angaben und Daten weitergeben?',
                topicId: 12,
                yesNo: false,
                answers: [`<p>Nein, Vermieter müssen sich an Schweizerische Datenschutzbestimmungen halten. Grundsätzlich muss der Vermieter sicherstellen, dass Ihre Daten geschützt sind und nur Person darauf Zugriff haben, welche beim Vermieter arbeiten und für Ihre Arbeit auf auf Ihre Daten zugreifen dürfen. Z.B. darf die Verwaltung Ihre Daten nicht an eine andere Firma weitergeben, welche Ihnen dann etwas verkaufen will.</p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Sind Vertragsveränderungen erlaubt?',
                topicId: 13,
                yesNo: false,
                answers: [`<p>Ja, jedoch muss sowohl der Mieter wie der Vermieter einverstanden sein und aus Beweisgründen sollten Sie Änderungen immer schriftlich festhalten. Falls nur der Vermieter oder Mieter eine Änderung möchte, z.B. die Miete erhöhen, dann ist dafür jedoch ein spezielles Vorgehen nötig.</p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Ist es üblich, dass ich dem Vermieter vor Vertragsabschluss etwas zahlen muss (z.B. Gebühren, Depot)?',
                topicId: 13,
                yesNo: false,
                answers: [`<p>Nein, hierbei handelt es sich oft um Betrugsfälle. Das Depot und die erste Miete müssen erst nachdem Sie einen Vertrag unterschrieben haben überwiesen werden. Die Details dazu werden normalerweise im Vertrag vereinbart. Auf keinen Fall sollten Sie das Depot an den Vermieter überweisen, sondern zu Ihrer eigenen Sicherheit immer ein spezielles Mietzinsdepot bei einer Schweizer Bank verwenden.  Insbesondere wenn Sie den Vermieter nie persönlich treffen und dieser fordert, dass Sie Geld ins Ausland überweisen, sollten Sie besonders vorsichtig sein.<p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Mein letzter Vermieter gibt mir schlechte Referenzen, was kann ich tun?',
                topicId: 13,
                yesNo: false,
                answers: [`<p>Sie sind nicht verpflichtet, Ihren alten Vermieter als Referenz anzugeben. Ausserdem müssen Sie dem neuen Vermieter auch keine Angaben dazu machen, wer Ihr letzter Vermieter war. Jedoch wird diese Information oft von Vermietern verlangt und Sie haben geringere Chancen eine Wohnung zu finden, wenn Sie Ihren letzten Vermieter nicht als Referenz angeben möchten. Deshalb können Sie versuchen von Ihrem bisherigem Vermieter eine schriftliche Referenz einzuholen, welche sachlich auflistet, dass Sie z.B. die Miete immer korrekt bezahlt haben und dass Ihnen nicht gekündigt wurde.<p>`],
                subQuestions: [
                ]
              }


            ]
          }
        ]
      },
      vertragsabschluss: {
        title: 'Vertragsabschluss und -gültigkeit',
        topic: 'vertragsabschluss',
        topicId: 2,
        meta: {},
        subtopics: [
          {
            subtopicTitle: 'Vertrag',
            questions: [
              {
                mainQuestion: 'Habe ich einen gültigen Vertrag abgeschlossen?',
                topicId: 21,
                yesNo: true,
                answers: [
                  `<p>Beantworten Sie folgende Fragen um eine detailiertere Antwort zu erhalten</p>`
                ],
                subQuestions: [
                  'Haben Sie sich über die Höhe der Miete geeinigt?',
                  'Haben Sie sich über die Mietwohnung/Haus und was genau sie mieten geeinigt?',
                  'Haben Sie jemals einen Vertrag unterzeichnet?'
                ],
                subAnswers: [
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich einen gültigen Vertrag abgeschlossen, da sie sich über die Miete und die Wohnung/Haus, welches sie mieten, geeinigt haben. Dazu ist keine schriftlicher Vertrag erforderlich. Jedoch sind mündliche Abmachungen manchmal schwierig zu beweisen. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, gilt der Vertrag trotzdem.',
                  'Sie haben wahrscheinlich einen gültigen Vertrag abgeschlossen, da sie sich über die Miete und die Wohnung/Haus, welches sie mieten, geeinigt und dies auch schriftlich festgehalten haben. Selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, gilt der Vertrag trotzdem.',
                ],
              },
              {
                mainQuestion: 'Was muss ein Mietvertrag beinhalten?',
                topicId: 22,
                yesNo: false,
                answers: [`<p>Zum Abschluss eines Mietvertrages reicht es, wenn man sich über die Miete und die Mietwohnung/-haus geeinigt hat. Dazu ist keine schriftlicher Vertrag erforderlich. Jedoch sind mündliche Abmachungen manchmal schwierig zu beweisen und daher wird ein schriftlicher Vertrag empfohlen. Falls Sie aber bereits in einer gemieteten Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag, selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind.<p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Die Miete ist sehr hoch, was kann ich tun?',
                topicId: 22,
                yesNo: false,
                answers: [`<p>Grundsätzlich gibt es die Möglichkeit, einen hohen Mietzins anzufechten, wenn diese als missbräuchlich gilt. Sie sollten auf jedem Fall bei Ihrem Vermieter schriftlich anfragen, wie viel der Vormieter bezahlt hat. Wenn Ihr Mietzins deutlich höher ist (z.B. mehr als 10%) obwohl die Wohnung nicht gross verändert wurde (z.B. kein Umbau), dann ist der Mietzins evtl. missbräuchlich. Leider sind  die Berechnungen dazu sind relativ kompliziert und Sie sollten sich dafür an einen Spezialisten wenden.<p>`],
                subQuestions: [
                ]
              },

              {
                mainQuestion: 'Sind Vertragsveränderungen erlaubt?',
                topicId: 22,
                yesNo: false,
                answers: [`<p>Ja, jedoch muss sowohl der Mieter wie der Vermieter einverstanden sein und aus Beweisgründen sollten Sie Änderungen immer schriftlich festhalten. Falls nur der Vermieter oder Mieter eine Änderung möchte, z.B. die Miete erhöhen, dann ist dafür jedoch ein spezielles Vorgehen nötig. In der Regel müssen Änderungen dem Mieter auf einem amtlichen Formular mitgeteilt werden.</p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Gehören Allgemeine Bestimmungen zum Vertrag?',
                topicId: 23,
                yesNo: false,
                answers: [`<p>Ja, wenn im Vertrag auf Allgemeine Bestimmungen hingewiesen wird, dann gelten diese grundsätzlich als Teil des Vertrages, ausser diese sind sehr ungewöhnlich oder irreführend. Wenn der Vermieter jedoch später die Allgemeinen Bestimmungen ändert gelten diese Änderungen nicht für den Mieter ausser beide Parteien waren einverstanden oder solche Änderungen sind ausdrücklich im Vertrag vorgesehen.</p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Wie hoch sind normalerweise die Nebenkosten?',
                topicId: 24,
                yesNo: false,
                answers: [`<p>Dies hängt stark von der Wohnung ab, jedoch sollten Sie sich bereits darüber informieren, bevor Sie einen Vertrag unterzeichnen. Vor allem wenn die Nebenkosten sehr tief  oder unklar aufgeführt sind, sollten Sie sich vom Vermieter schriftlich bestätigen lassen, wie hoch die zu erwartenden Nebenkosten sein werden.  </p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Darf der Vermieter ein Depot verlangen?',
                topicId: 25,
                yesNo: false,
                answers: [`<p>Ja, das ist in der Schweiz üblich und wird in der Regel im Mietvertrag vereinbart. Beachten Sie, dass das Mietzinsdepot immer auf ein spezielles Sperrkonto bei einer Bank überweisen werden muss, welches auf Ihren Namen lautet. Überweisen Sie das Geld nicht direkt an den Vermieter, der Vermieter darf diese nicht von Ihnen verlangen. Der Vermieter darf maximal drei Monatsmieten von Ihnen verlangen (inklusive Nebenkosten) ausser es handelt sich um Geschäftsräume.</p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Wie hoch darf das Depot sein?',
                topicId: 25,
                yesNo: false,
                answers: [`<p> Der Vermieter darf maximal drei Monatsmieten von Ihnen verlangen (inklusive Nebenkosten) ausser es handelt sich um Geschäftsräume.</p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Wann muss ich das Depot bezahlen?',
                topicId: 25,
                yesNo: false,
                answers: [`<p>Dies sollte in Ihrem Vertrag stehen. Normalerweise muss das Depot überwiesen werden bevor Sie die Schlüssel zur Wohnung erhalten.</p>`],
                subQuestions: [
                ]
              },


              {
                mainQuestion: 'Was für Alternativen gibt es zum Depot?',
                topicId: 26,
                yesNo: false,
                answers: [`<p>Ja, wenn Ihr Vermieter damit einverstanden ist, können Sie eine Mietzinskautionversicherung abschliessen. Wie bei Versicherungen üblich, müssen Sie jährlich eine Prämie bezahlen und dafür kein Depot hinterlegen. Beachten Sie jedoch, dass es sich dabei nicht um eine Haftpflichtversicherung handelt. Die Versicherung schützt hauptsächlich den Vermieter davor, falls Sie bei Ihrem Auszug aus der Wohnung dem Vermieter noch Geld Schulden. Die Versicherung, anstatt Ihr Vermieter, wird dann von Ihnen dieses Geld zurückverlangen. <p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Ich möchte den Mietvertrag doch nicht unterzeichnen, was nun?',
                topicId: 25,
                yesNo: false,
                answers: [`<p>Sie sind nicht gezwungen den Vertrag zu unterschreiben und normalerweise kann der Vermieter keine Entschädigung verlangen. Der Mietvertrag ist ein Angebot, dass Sie annehmen oder ablehnen können und der Vermieter kann nicht einfach davon ausgehen, dass Sie unterschreiben werden. Jedoch sollten Sie verhindern, dass ein falscher Eindruck entsteht und keine weiteren Abmachungen (z.B. dass die Wohnung gemäss Ihren Vorstellungen angepasst wird) eingehen bevor der Vertrag unterschrieben ist, da der Vermieter sonst eine Entschädigung verlangen kann. Das Ausfüllen eines Anmeldeformular gilt nicht als Vertrag und der Vermieter kann keine Entschädigung dafür verlangen.</p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Ab welchem Alter darf ich einen Mietvertrag unterzeichnen?',
                topicId: 26,
                yesNo: false,
                answers: [`<p>Grundsätzlich gilt die Regel, dass man mit dem eigenen Lohn in der Lage sein muss, die Miete bezahlen zu können, um eine Vertrag ohne die Eltern abschliessen zu können. Somit können Leute jünger als 18 Jahre alt (z.B. Lehrlinge) normalerweise keine Mietverträge für eine ganze Wohnung abschliessen, evtl. jedoch für ein WG-Zimmer (Untermiete). Allgemein ist es üblich, dass bei Personen jünger als 18 Jahre die Eltern unterschreiben müssen, da die Vermieter meist nicht das Risiko eingehen möchten, dass der Vertrag als ungültig gelten könnte.  </p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Ist es besser gemeinsam einen Vertrag zu unterschreiben oder Untermieter zu sein?',
                topicId: 27,
                yesNo: false,
                answers: [`<p>Dies hängt von der Situation ab. Für den Vermieter ist es besser, wenn mehrere Personen unterschreiben und daher ist es oft einfacher eine Wohnung zu finden. Jedoch ist es so, dass alle Personen, welche den Vertrag unterzeichnet haben, als fixe Gruppe behandelt werden. Z.B. sind alle gemeinsam für die Bezahlung der Miete verantwortlich und  eine einzelne Person kann nicht einfach den Vertrag kündigen oder „aussteigen“, da man sich als Gruppe verpflichtet hat. Dementsprechend sollte man sich gut überlegen, mit wem man gemeinsam eine Vertrag abschliesst, da man in schlechtesten Fall die Miete für einen Mitbewohner bezahlen muss, welcher nicht mehr zahlen kann oder will. Man kann auch niemand zwingen aus der Wohnung auszuziehen, wenn die Person den Vertrag mitunterschrieben hat.</p>

<p>Ein Untermietvertrag ist meist einfacher für den Untermieter. In einem solchen Fall ist der Mieter der Wohnung der Vermieter des Untermieters. Somit sind die meisten Gesetze und das Verhältnis zwischen Untermieter und Mieter gleich wie zwischen Vermieter und Mieter. Der Vorteil davon ist, gerade bei WGs, dass es einfacher ist, wenn jemand auszieht und nicht mehr in der Wohnung leben möchte. Jedoch trägt der Mieter in diesem Fall ein höheres Risiko, hat dafür aber auch mehr zu sagen. Grundsätzlich sollte man bei der Untermiete ebenfalls einen schriftlichen Vertrag abschliessen und ein Antrittsprotokoll erstellen.</p>
`],
                subQuestions: [
                ]
              }




            ]
          }
        ]
      }
    }
  })
}

export default createStore
